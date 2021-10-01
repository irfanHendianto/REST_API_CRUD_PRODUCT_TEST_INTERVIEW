const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema({
    code_transaksi: {
        type: String,
        required:true
    },
    tanggal_transaksi:{
        type:Date,
        default: Date.now
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    items:[
        {
          _id:{type: mongoose.Schema.Types.ObjectId, ref:'item'},
           qty: {type:Number,required:true},
           harga:{type:String,required:true}
        }
    ],
    total_qty:{
        type:Number,
        required: true
    },
    total_diskon:{
        type:String,
        required: true
    },
    total_harga:{
        type:String,
        required: true
    }

},{
    timestamps:true
})
const Sales = mongoose.model('sales', SalesSchema);

module.exports = {Sales}