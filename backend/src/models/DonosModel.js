module.exports = (sequelize, DataTypes) => {
  const Dono = sequelize.define('Dono', {
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

  Dono.associate = (models) => {
    Dono.hasMany(models.Carro,
      { foreignKey: 'donoId', as: 'carros' });
  };

  return Dono;
};