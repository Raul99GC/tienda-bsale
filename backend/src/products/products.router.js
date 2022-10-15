const router = require('express').Router()
const productServices = require('./products.http');

router.route('/')
    .get(productServices.getAll)

router.route('/:id')
    .get(productServices.getById)


exports.router = router