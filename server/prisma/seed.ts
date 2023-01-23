import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcryptjs";

const prisma = new PrismaClient()

const firstUserId = '0730ffac-d039-4194-9571-01aa2aa0efbd'
const secondUserId = '00880d75-a933-4fef-94ab-e05744435297'

async function main() {
    await prisma.user.deleteMany()
    await prisma.car.deleteMany()
    
    await Promise.all([
        prisma.user.create({
            data: {
                id: firstUserId,
                contact_phone: '(77)777777777',
                email: 'teste@gmail.com',
                name: 'Diego',
                password: hashSync('Teste@123'),
            }
        }),
        prisma.user.create({
            data: {
                id: secondUserId,
                contact_phone: '(88)888888888',
                email: 'random@gmail.com',
                name: 'Alex',
                password: hashSync('Random@123'), 
            }
        }),
    ])

    await Promise.all([
        prisma.car.create({
            data: {
                brand: 'Honda',
                name: 'Civic',
                year_manufacture: 2001,
                description: 'Carro novo, usado apenas 3 vezes',
                image: '33170876-ea93-4459-a77f-e29021d4fb0b.jpg',
                userId: firstUserId
            }
        }),
        prisma.car.create({
            data: {
                brand: 'Volkswagem',
                name: 'Saveiro Pepper',
                year_manufacture: 1985,
                description: 'Carro em ótimas condições com pouco tempo de uso',
                image: '9434c366-4fdf-4d53-805f-1188c856ee00.jpg',
                userId: firstUserId,
            }
        }),
        prisma.car.create({
            data: {
                brand: 'Volkswagem',
                name: 'Golf',
                year_manufacture: 1994,
                description: 'Carro usado em ótimo estado, apenas os pneus que estão carecas',
                image: 'a657e0b6-bb74-49ac-8469-e9a2390c6e59.jpg',
                userId: secondUserId
            }
        }),
        prisma.car.create({
            data: {
                brand: 'Volkswagem',
                name: 'Celta', 
                year_manufacture: 2000,
                description: 'Carro usado, com peças em estado muito bom',
                image: 'f0c27160-350f-44e3-89a4-3c5f54fa8935.jpg',
                userId: secondUserId
            }
        }),
    ])
    
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })
