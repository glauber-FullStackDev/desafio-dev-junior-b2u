const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const OwnerModel = require('./owner');

class CarModel extends Model {}

CarModel.init(
  {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    owner_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    owner_email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    owner_phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    car_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    car_description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    car_brand: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    car_year: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'cars',
    modelName: 'car',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

CarModel.sync().then(() => {
  console.log('Car db is synced');
});

// CarModel.belongsToMany(OwnerModel, {
//     foreignkey: 'owner_id',
//     as: 'owner'
// });

module.exports = CarModel;
