const Traveller = require('./Traveller.js');
const Trip = require ('./Trip.js');
const Location = require ('./Location.js');

Traveller.hasMany(Trip,{
    foreignKey : 'traveller_id'
});
Location.hasMany( Trip,{
    foreignKey:'location_id'
});

module.exports = {Traveller, Trip, Location}