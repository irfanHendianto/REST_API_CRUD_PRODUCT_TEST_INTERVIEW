const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    nama: {
        type: String,
        required:true
    },
    contact:{
        type:String,
        required:true

    },
    email: {
        type: String,
        required:true
    },
    alamat:{
        type:String,
        required: true
    },
    diskon:{
        type:String,
        required: true
    },
    tipe_diskon:{
        type:String,
        required: true
    },
    ktp:{
        type:String,
        required: true
    },

},{
    timestamps:true
})
const Customer = mongoose.model('customer', CustomerSchema);

module.exports = {Customer}