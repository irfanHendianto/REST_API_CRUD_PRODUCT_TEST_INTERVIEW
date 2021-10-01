const express = require('express');
const router = express.Router();
const {addItem,update,deleteData} = require('./itemrController');
const upload = require('../../utils/multer');

router.post('/',upload.single("image"), addItem);
router.put('/:id',upload.single("image"), update);
router.delete('/:id', deleteData);


module.exports = router