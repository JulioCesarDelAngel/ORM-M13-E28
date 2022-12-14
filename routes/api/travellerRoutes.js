const router = require ('express').Router();
const { Traveller, Trip } = require('../../models');

router.get('/', async (request, response) => {
    try {
        const travellers = await Traveller.findAll();
        response.status(200).json(travellers);
    }
    catch (error){
        response.status(500).json(error);
    }
});

router.post('/', async (request, response) => {
    try {
        const traveller = await Traveller.create(request.body);
        response.status(200).json(traveller);
    }
    catch ( error ){
        response.status(500).json( error );
    }
});


module.exports = router;