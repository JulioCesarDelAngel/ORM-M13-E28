const router = require ('express').Router();
const { response } = require('express');
const { Location } = require('../../models');

router.get('/', async ( request, response) => {
    try {
            const locations = await Location.findAll();
            response.status(200).json(locations);
    }
    
    catch ( error ){
        response.status(500).json( error);
    }

});

router.post('/', async (reuqest, response) => {
    try {
        response.status(200).json({
            "code": 200,
            "Message": "TestOk",
            "data": []
        });
    
    }

    catch ( error ){
        response.status(500).json( error );
    }
})

module.exports = router;