const express = require('express');
const router = express.Router();
const customer = require('./customer');
const item = require('./item');
const sales = require('./sales');


router.use("/customer",customer);
router.use("/item",item);
router.use("/sales",sales)


module.exports = {
    routes: router
}