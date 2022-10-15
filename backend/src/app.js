//* Dependencias
const express = require('express');

//*Archivos de rutas
const productRouter = require('./products/products.router').router;
const categoryRouter = require('./categories/categories.router').router;


//* Configuraciones iniciales
const app = express();
const { db } = require('./utils/database');
// initModels()


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
app.use('/api/v1/products', productRouter);
app.use('/api/v1/categories', categoryRouter);


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to my api' })
});



app.listen(8000, () => {
    console.log('Server started at port 8000')
});


module.exports = app;