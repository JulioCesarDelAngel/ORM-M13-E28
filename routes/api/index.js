const router = require('express').Router();
const travellerRoutes = require('./travellerRoutes');

router.use('/api/traveller', travellerRoutes);

module.exports = router;