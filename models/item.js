const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    nama_item: {
        type: String,
        required:true
    },
    stok:{
        type:Number,
        required:true

    },
    harga_satuan: {
        type: Number,
        required:true
    },
    barang:{
        type:String,
        required: true
    }

},{
    timestamps:true
})
const Item = mongoose.model('item', ItemSchema);

module.exports = {Item}