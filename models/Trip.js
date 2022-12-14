const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
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
        timestamps: false,      // no agrega timestamp attributes (updatedAt, createdAt)
        freezeTableName: true, //singular o como se ha definido la tabla
        underscored: false,   //no agregar guin bajo
        modelName: 'trip'
    }
)

module.exports = Trip;