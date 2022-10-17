const productControllers = require('./products.controllers');


const getAll = (req, res) => {
    const { name, id, category } = req.query
    productControllers.getAllProducts(name, id, category)
        .then(response => {
            if (response.length > 0) {
                res.status(200).json({ items: response.length, data: response })
            } else {
                res.status(404).json({ message: 'invalid parameter' })
            }
        })
        .catch(err => res.status(400).json({ err }))
};

const getById = (req, res) => {
    const productId = req.params.id;
    productControllers.getProductById(productId)
        .then(response => {
            if (response.length >= 0) {
                res.status(200).json({ items: response.length, data: response });
            } else {
                res.status(404).json({ message: 'invalid ID' })
            }
            
        })
        .catch(err => {res.status(404).json({ message: err })})
};


module.exports = {
    getAll,
    getById
}