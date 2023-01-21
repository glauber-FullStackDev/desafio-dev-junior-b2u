import { DataBase } from "../DataBase";
import { VehiclesData } from "../VehiclesData";

const vehicles = require("./vehicles")

class Migrations extends DataBase {

    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables with seed....")
            await this.populateTable()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            this.getConnection().destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await this.getConnection().raw(`
        CREATE TABLE ${VehiclesData.TABLE_VEHICLES} (
            id VARCHAR(255) PRIMARY KEY,
            carName VARCHAR(255) NOT NULL,
            brand VARCHAR(255) NOT NULL,
            yearOfManufacture  VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            telephone VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
        );
        `)
    }

    populateTable = async () => {
        await this.getConnection()
            .from(VehiclesData.TABLE_VEHICLES)
            .insert(vehicles)
    }

}

const migrations = new Migrations()
migrations.execute()