import { Sequelize } from "sequelize-typescript"
const { Model, DataTypes } =  require("sequelize")

export class DonoCarro extends Model {
    static init(connection: Sequelize) {
        try {
            super.init({
                nome: DataTypes.STRING,
                email: DataTypes.STRING,
                telefone: DataTypes.STRING,
                foto_perfil: DataTypes.BLOB,
                ativo: DataTypes.BOOLEAN,
            }, {
                sequelize: connection
            })
            
        } catch (error) {
            console.log(error)    
        } 
    }

    static associate(models: any) {
        this.hasOne(models.Carro, { foreignKey: 'dono_carro_id', as: 'dono_carro' })
    }
}