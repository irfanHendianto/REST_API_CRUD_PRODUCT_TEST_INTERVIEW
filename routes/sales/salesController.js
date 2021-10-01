const {Sales} = require('../../models/sales');
const mongoose = require('mongoose');

const addSales = (req,res,next) =>{

    try {
        let code_transaksi = "FA" + new Date().getTime();
        const sales = new Sales({
            code_transaksi: code_transaksi,
            tanggal_transaksi: Date.now(),
            customer_id: req.body.customer_id,
            items: req.body.items,
            total_qty: req.body.total_qty,
            total_diskon: req.body.total_diskon,
            total_harga: req.body.total_harga
        });
        
        sales.save();

        res.status(200).send({
            status:200,
            message: "Success"
        })
    } catch (error) {
        res.status(400),send({
            status:400,
            message: error.message 
        })
    }
}

const update = async (req,res,next) =>{

    try {
        const sales ={
            items: req.body.items,
            total_qty: req.body.total_qty,
            total_diskon: req.body.total_diskon,
            total_harga: req.body.total_harga
        };
        
        await Sales.findByIdAndUpdate({_id:req.params.id},{$set: sales}, {new:true})
        .then(()=>{
            res.status(200).send({
                status:200,
                message: "Success"
            })
        })
    } catch (error) {
        res.status(400),send({
            status:400,
            message: error.message 
        })
    }
}

const deleteData = async (req,res,next) =>{

    try {

        await Sales.findByIdAndDelete({_id:req.params.id})
        .then(()=>{
            res.status(200).send({
                status:200,
                message: "Success"
            })
        })
    } catch (error) {
        res.status(400),send({
            status:400,
            message: error.message 
        })
    }
}
module.exports = {
    addSales,
    update,
    deleteData
}