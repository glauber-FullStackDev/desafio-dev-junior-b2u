import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpAdapterHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EntityPersistenceError } from 'src/shared/errors/databaseerros/PersisteEntityError';
import { AlreadyExistsEntityError } from 'src/shared/errors/domainErrors/AlredyExistsEntityError';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const exceptionData = this.mapExceptionDataByInstance(exception, undefined)
      .forExpection(EntityPersistenceError, HttpStatus.INTERNAL_SERVER_ERROR)
      .forExpection(AlreadyExistsEntityError, HttpStatus.CONFLICT)
      .getData();

    const responseBody = exceptionData;

    httpAdapter.reply(
      ctx.getResponse(),
      responseBody,
      exceptionData.statusCode,
    );
  }

  private mapExceptionDataByInstance(exception: any, data: ExceptionData) {
    let exceptionData = data ?? {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    };

    const forExpection = (exptionClass: any, statusCode: HttpStatus) => {
      if (exception instanceof exptionClass) {
        exceptionData = {
          statusCode,
          message: exception?.response?.message ?? exception.message,
        };
      }

      return this.mapExceptionDataByInstance(exception, exceptionData);
    };

    const getData = () => {
      if (exception instanceof HttpException) {
        return {
          statusCode: exception.getStatus(),
          message: exception.message,
        };
      }

      return exceptionData;
    };

    return {
      forExpection,
      getData,
    };
  }
}

type ExceptionData = {
  statusCode: HttpStatus;
  message: string;
};
