const productControllers = require('./products.controllers');


const getAll = (req, res) => {
    const {name, id} = req.query
    productControllers.getAllProducts(name, id)
        .then(response => {
            res.status(200).json({ items: response.length, data: response })
        })
        .catch(err => res.status(400).json({err}))
};

const getById = (req, res) => {
    const productId = req.params.id;
    productControllers.getProductById(productId)
       .then(response => {
          res.status(200).json({ items: response.length, data: response });
       })
       .catch(err => {res.status(404).json({message: 'invalid ID'})})
 };


module.exports = {
    getAll,
    getById
 }