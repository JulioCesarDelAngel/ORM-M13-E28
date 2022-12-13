const Sequelize = requiere('sequelize');

const sequelize = new Sequelize(
    process.env.DB,
    process.env.USR,
    process.env.PSW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
  
  module.exports = sequelize;
  