const {Model, DataTypes} = require('requelize');
const sequelize = require('../config/connection');

class Location extends Model{}

Location.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        location_name :{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        modelName:'location'
    }
);

module.exports = Location;