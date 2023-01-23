import { ApiProperty } from '@nestjs/swagger';

export class CreateVehicleDto {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'Prisma' })
  name: string;
  @ApiProperty({ example: 'Chevrolet' })
  brand: string;
  @ApiProperty({ example: '2018' })
  manufacturingYear: string;
  @ApiProperty({ example: 'R$40.000,00' })
  price: string;
  @ApiProperty({ example: 'Azul, 1.0, travas e vidros elétricos' })
  description: string;
  @ApiProperty({ example: 'Ricardo' })
  ownerName: string;
  @ApiProperty({ example: 'ricardo@example.com' })
  email: string;
  @ApiProperty({ example: '(48)99812-3456' })
  phone: string;
  @ApiProperty({
    example:
      'https://quatrorodas.abril.com.br/wp-content/uploads/2017/05/prisma-azul.jpg?quality=70&strip=info',
  })
  url: string;
}
