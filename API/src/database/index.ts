import { Sequelize } from 'sequelize-typescript';

import { DonoCarro } from '../models/DonoCarro'
import { Carro } from '../models/Carro'

const dbConfig = require('../config/database')
const connection = new Sequelize(dbConfig)

DonoCarro.init(connection)
Carro.init(connection)

DonoCarro.associate(connection.models)
Carro.associate(connection.models)

module.exports = connection