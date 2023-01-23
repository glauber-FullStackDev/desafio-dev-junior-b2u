import { Sequelize } from "sequelize-typescript"
const { Model, DataTypes } =  require("sequelize")

export class Carro extends Model {
    static init(connection: Sequelize) {
        try {
            super.init({
                nome: DataTypes.STRING,
                marca: DataTypes.STRING,
                ano_fabricacao: DataTypes.INTEGER,
                descricao: DataTypes.STRING,
                foto_carro: DataTypes.BLOB,
                ativo: DataTypes.BOOLEAN,
            }, {
                sequelize: connection
            })
            
        } catch (error) {
            console.log(error)    
        }
    }

    static associate(models: any) {
        this.belongsTo(models.DonoCarro, { foreignKey: 'dono_carro_id', as: 'dono_carro' }) 
    }
}