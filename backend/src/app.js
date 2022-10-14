//* Dependencias
const express = require('express');


//* Configuraciones iniciales
const app = express();




//* rutas
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to my api' })
});



app.listen(8000, () => {
    console.log('Server started at port 8000')
});


module.exports = app;