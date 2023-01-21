import { Request, Response } from "express";
import { VehiclesData } from "../dataBase/VehiclesData";
import { GenerateId } from "../helpers/GenerateId";
import { NewVehicle, UpdateDTO, Vehicles } from "../models/Vehicles";

export class VehiclesController {
    constructor(
        private vehicleData: VehiclesData,
        private generateId: GenerateId
    ) { }

    create = async (req: Request, res: Response) => {
        const input: Vehicles = {
            id: this.generateId.generateId(),
            carName: req.body.carName,
            brand: req.body.brand,
            yearOfManufacture: req.body.yearOfManufacture,
            description: req.body.description,
            name: req.body.name,
            telephone: req.body.telephone,
            email: req.body.email,
        }

        const newVehicle = new NewVehicle(input)
        newVehicle.carBussines()
        const response = await this.vehicleData.create(newVehicle)
        res.status(200).send({ response: response })
    }

    getAll = async (req: Request, res: Response) => {
        const response = await this.vehicleData.getAll()
        res.status(200).send({ response: response })
    }

    getById = async (req: Request, res: Response) => {
        const id = req.params.id
        const response = await this.vehicleData.getById(id)
        res.status(200).send(!id || response.length < 1 ? "Digite um id valido" : { response: response })
    }

    update = async (req: Request, res: Response) => {
        const input: Vehicles = req.body
        const validVehicle = new NewVehicle(input)
        validVehicle.carBussines()
        const response = await this.vehicleData.update(validVehicle)
        const message = !response ? "Digite um id Valido " : "Alterado com sucesso"
        res.status(200).send({ response: message })
    }

    delete = async (req: Request, res: Response) => {
        const id = req.params.id
        const response = await this.vehicleData.delete(id)
        const message = !id || !response ? "Digite um id Valido " : "Deletado com sucesso"
        res.status(200).send({ response: message })
    }
}