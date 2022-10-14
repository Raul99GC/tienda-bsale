//* Dependencias
const express = require('express');


//* Configuraciones iniciales
const app = express();
const { db } = require('./utils/database');



//* Base de Datos

db.authenticate()
    .then(() => console.log('database authenticate'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => {
        console.log('Database synced')
    })
    .catch(err => console.log(err))




//* rutas
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to my api' })
});



app.listen(8000, () => {
    console.log('Server started at port 8000')
});


module.exports = app;