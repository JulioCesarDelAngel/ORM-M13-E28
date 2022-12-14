const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false            
        },
        email:{
            type : DataTypes.STRING,
            allowNull:false
        }        

    },
    {
        sequelize,
        timestamps: false,  // don't add the timestamp attributes (updatedAt, createdAt)
        freezeTableName: true, // disable the modification of tablenames; By default, sequelize will automatically transform all passed model names (first parameter of define) into plural.
        underscored: false, // don't use camelcase for automatically added attributes but underscore style so updatedAt will be updated_at
        modelName: 'traveller'
    }
);

module.exports = Traveller;