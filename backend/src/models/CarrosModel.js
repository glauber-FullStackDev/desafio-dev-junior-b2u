module.exports = (sequelize, DataTypes) => {
  const carros = sequelize.define('carros', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    marca: DataTypes.STRING,
    anoFabricacao: DataTypes.STRING,
    descricao: DataTypes.STRING,
    imagem: DataTypes.BLOB,
    donoId: { type: DataTypes.INTEGER, foreignKey: true },
  },
    {
      timestamps: false,
      tableName: 'carros',
      underscored: true,
    });

    carros.associate = (models) => {
      carros.belongsTo(models.donos);
  };

  return carros;
};