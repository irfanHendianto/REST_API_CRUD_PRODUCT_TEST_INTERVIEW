const express = require('express');
const router = express.Router();
const {addCustomer,update,deleteData} = require('./customerController');
const upload = require('../../utils/multer');

router.post('/',upload.single("image"), addCustomer);
router.put('/',upload.single("image"), update);
router.delete('/',deleteData)


module.exports = router