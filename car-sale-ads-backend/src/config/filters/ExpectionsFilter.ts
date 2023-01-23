import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpAdapterHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { InvalidEmailOrPasswordError } from 'src/shared/errors/authErrors/InvalidEmailOrPasswordError';
import { EntityPersistenceError } from 'src/shared/errors/databaseErrors/EntityPersistenceError';
import { AlreadyExistsEntityError } from 'src/shared/errors/domainErrors/AlredyExistsEntityError';
import { DoesNotExistsEntityError } from 'src/shared/errors/domainErrors/DoesNotExistsEntityError';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    if (process.env.NODE_ENV === 'development') {
      Logger.error(exception);
    }

    const exceptionData = this.mapExceptionDataByInstance(exception)
      .forExpection(EntityPersistenceError, HttpStatus.INTERNAL_SERVER_ERROR)
      .forExpection(AlreadyExistsEntityError, HttpStatus.CONFLICT)
      .forExpection(DoesNotExistsEntityError, HttpStatus.BAD_REQUEST)
      .forExpection(InvalidEmailOrPasswordError, HttpStatus.UNAUTHORIZED)
      .getData();

    const responseBody = exceptionData;

    httpAdapter.reply(
      ctx.getResponse(),
      responseBody,
      exceptionData.statusCode,
    );
  }

  private mapExceptionDataByInstance(exception: any, data?: ExceptionData) {
    let exceptionData = data ?? {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    };

    const forExpection = (exptionClass: any, statusCode: HttpStatus) => {
      if (exception instanceof exptionClass) {
        exceptionData = {
          statusCode,
          message: this.getExceptionMessage(exception),
        };
      }

      return this.mapExceptionDataByInstance(exception, exceptionData);
    };

    const getData = () => {
      if (exception instanceof HttpException) {
        console.log(exception);
        return {
          statusCode: exception.getStatus(),
          message: this.getExceptionMessage(exception),
        };
      }

      return exceptionData;
    };

    return {
      forExpection,
      getData,
    };
  }

  getExceptionMessage(exception: any) {
    return exception?.response?.message ?? exception.message;
  }
}

type ExceptionData = {
  statusCode: HttpStatus;
  message: string;
};
