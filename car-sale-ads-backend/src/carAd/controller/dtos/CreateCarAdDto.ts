import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

class CarItemsDto {
  @ApiProperty({ example: true })
  @IsBoolean()
  eletricWindow: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  hidraulicSteenring: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  eletricicSteenring: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  automaticGearBox: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  airConditioning: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  airbag: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  alarm: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  eletricLock: boolean;
}

export class CreateCarAdDto {
  @ApiProperty({ example: 'Chevrollet' })
  @IsString()
  brand: string;

  @ApiProperty({ example: 'Prisma 1.4 flex' })
  @IsString()
  model: string;

  @ApiProperty({ example: 2020 })
  @IsNumber()
  manufactureYear: number;

  @ApiProperty({ example: 2021 })
  @IsNumber()
  modelYear: number;

  @ApiProperty({ example: 'flex' })
  @IsString()
  fuel: string;

  @ApiProperty({ example: 42000 })
  @IsNumber()
  km: number;

  @ApiProperty({ example: 52800 })
  @IsNumber()
  price: number;

  @ApiProperty({ type: CarItemsDto })
  items: CarItemsDto;
}
