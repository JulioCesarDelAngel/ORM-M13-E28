const sequelize = require('../config/connection');
const { Traveller, Location, Trip} = require ('../models');

const travellerSeedData = require('./travellerSeedData.json');
const locationSeedData = require('./locationSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const travellers = await Traveller.bulkCreate(travellerSeedData);

  const locations = await Location.bulkCreate(locationSeedData);

  // Cree viajes al azar
  for (let i = 0; i < 10; i++) {
    // Obtenga el `id` de un viajero al azar
    const { id: randomTravellerId } = travellers[
      Math.floor(Math.random() * travellers.length)
    ];

    // Obtenga el `id` de una ubicación al azar
    const { id: randomLocationId } = locations[
      Math.floor(Math.random() * locations.length)
    ];

    // Cree un nuevo viaje con `trip_budget` y `traveller_amount` valores al azar, pero con los identificadores antes seleccionadas
    await Trip.create({
      trip_budget: (Math.random() * 10000 + 1000).toFixed(2),
      traveller_amount: Math.floor(Math.random() * 10) + 1,
      traveller_id: randomTravellerId,
      location_id: randomLocationId,
    }).catch((err) => {
      // Si hay un error, como la misma combinación aleatoria de `traveller.id` y `location.id` y obtenemos un error de restricción, no abandone el proceso de Node
      console.log(err);
    });
  }

  process.exit(0);
};

seedDatabase();
