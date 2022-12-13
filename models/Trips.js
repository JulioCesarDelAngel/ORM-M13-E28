const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
    {
        id:{
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement: true
        },
        trip_budget :{
            type :DataTypes.DECIMAL,
            allowNull:true
        },
        traveller_amount : {
            type : DataTypes.DECIMAL,
            allowNull:true
        },
        traveller_id :{
            type : DataTypes.INTEGER,
            references:{
                model:'traveller',
                key:'id'
            }
        },
        location_id :{
            type:DataTypes.INTEGER,
            references:{
                model:'location',
                key:'id'
            }
        }

    },
    {
        sequelize,
        modelName: 'trips'
    }
)

module.exports = Trips;