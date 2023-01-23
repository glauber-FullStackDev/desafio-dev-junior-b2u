const { Sequelize, Model, DataTypes } = require('sequelize');
const CarModel = require('./car');

const sequelize = new Sequelize('sqlite::memory:');

class OwnerModel extends Model { }

OwnerModel.init({
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
},
    {
        sequelize,
        tableName: 'owners',
        modelName: 'owner',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

OwnerModel.sync().then(() => {
    console.log('Onwer db is synced');
});

// OwnerModel.hasMany(CarModel, {
//     foreignkey: 'car_id',
//     as: 'car'
// });

module.exports = OwnerModel;
