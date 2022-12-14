require('dotenv').config();
const express = require('express');
const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//activar la sincronizacion de DB - Models
sequelize.sync({ force : false}).then(() => {
    app.listen(PORT, () => console.log( ` Now listening on port ${PORT} `));
});
