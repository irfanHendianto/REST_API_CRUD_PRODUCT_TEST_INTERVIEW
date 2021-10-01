const express = require('express');
const router = express.Router();
const {addSales,update,deleteData} = require('./salesController');


router.post('/', addSales);
router.patch('/:id',update);
router.delete('/:id',deleteData)

module.exports = router