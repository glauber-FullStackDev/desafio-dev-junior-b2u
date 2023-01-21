import { NewVehicle, Vehicles } from "../models/Vehicles";
import { DataBase } from "./DataBase";

export class VehiclesData extends DataBase {

    public static TABLE_VEHICLES = "Vehicles_Db"

    create = async (vehicle: NewVehicle): Promise<string> => {
        await this.getConnection()
            .from(VehiclesData.TABLE_VEHICLES)
            .insert(vehicle.getCar())
        return "Veiculo criado com sucesso"
    }

    getAll = async (): Promise<Vehicles[]> => {
        const resposnse: Vehicles[] = await this.getConnection()
            .from(VehiclesData.TABLE_VEHICLES)
            .select()
        return resposnse
    }

    getById = async (id: string): Promise<Vehicles[]> => {
        const resposnse: Vehicles[] = await this.getConnection()
            .from(VehiclesData.TABLE_VEHICLES)
            .select()
            .where({ id })
        return resposnse
    }

    update = async (input: NewVehicle): Promise<number> => {
        const response: number = await this.getConnection()
            .from(VehiclesData.TABLE_VEHICLES)
            .update(input.getCar())
            .where("id", input.getId())
        return response
    }

    delete = async (id: string): Promise<number> => {
        const response: number = await this.getConnection()
            .from(VehiclesData.TABLE_VEHICLES)
            .delete()
            .where({ id })
        return response
    }

}