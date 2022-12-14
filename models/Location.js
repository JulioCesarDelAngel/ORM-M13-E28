const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model{}

Location.init(
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement:true
        },
        location_name :{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        timestamps: false,      // no agrega timestamp attributes (updatedAt, createdAt)
        freezeTableName: true, //singular o como se ha definido la tabla
        underscored: false,   //no agregar guion bajo
        modelName:'location'
    }
);

module.exports = Location;