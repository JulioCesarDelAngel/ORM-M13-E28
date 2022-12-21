const router = require ('express').Router();
const { Location } = require('../../models');

router.get('/', async ( request, response) => {
    try {
        response.status(200).json({
            "code": 200,
            "Message": "TestOk",
            "data": []
        });
    }
    catch ( error ){
        response.status(500).json( error);
    }

});

module.exports = router;