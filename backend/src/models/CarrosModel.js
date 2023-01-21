module.exports = (sequelize, DataTypes) => {
  const Carro = sequelize.define('Carro', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    marca: DataTypes.STRING,
    anoFabricacao: DataTypes.STRING,
    descricao: DataTypes.STRING,
    donoId: { type: DataTypes.INTEGER, foreignKey: true },

  },
    {
      timestamps: false,
      tableName: 'Carros',
      underscored: true,
    });

  return Carro;
};