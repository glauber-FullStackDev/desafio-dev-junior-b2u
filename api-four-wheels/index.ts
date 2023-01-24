import { PrismaClient } from '@prisma/client'
const express = require('express')
const app = express()
const port = 1337
const configEmail = 'test@gmail.com'
var cors = require('cors')
import { FindManyUsers } from './routes/user'
import { FindManyAdverts } from './routes/adverts'

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
    console.log(`Api desafio dev junior b2u está rodando no port: ${port} 🚀 `)
})

const prisma = new PrismaClient()

const createUser = async () => {
    const find = await prisma.user.findUnique({
        where: {
            email: configEmail
        },
    })
    if (!find) {
        const user = await prisma.user.create({
            data: {
                email: 'test@gmail.com',
                password: '123456'
            },
        })
    }
}
async function main() {

    createUser()
    app.get('/', (req: any, res: any) => {
        res.send('Serviço online!')
    })
    app.use("/api", FindManyUsers, FindManyAdverts);

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })