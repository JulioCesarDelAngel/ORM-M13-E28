const router = require('express').Router();
const travellerRoutes = require('./travellerRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/api/traveller', travellerRoutes);

router.use('/api/location', locationRoutes);

module.exports = router;