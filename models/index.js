const Traveller = require('./Traveller.js');
const Trips = require = ('./Trips.js');
const Location = require = ('./Location.js');


Trips.hasMany(Traveller,{
    foreignKey: 'traveller_id'

});

Trips.hasMany(Location,{
    foreignKey:'location_id'
});

