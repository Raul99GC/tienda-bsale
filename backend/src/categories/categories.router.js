const router = require('express').Router()
const categoryServices = require('./categories.http');


router.route('/')
    .get(categoryServices.getAll)

router.route('/:id')
    .get(categoryServices.getById)



exports.router = router