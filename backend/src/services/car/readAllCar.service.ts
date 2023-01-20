import prisma from "../../prisma";


export const readAllCarService = async () => {
    
    const cars = await prisma.car.findMany();
    return cars;
}