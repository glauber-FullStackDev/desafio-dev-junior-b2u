module.exports = (sequelize, DataTypes) => {
  const donos = sequelize.define('donos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'donos',
      underscored: true,
    });

    donos.associate = (models) => {
      donos.hasMany(models.carros,
      { foreignKey: 'donoId', as: 'carros' });
  };

  return donos;
};