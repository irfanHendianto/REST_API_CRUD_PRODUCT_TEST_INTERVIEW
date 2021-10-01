const {Item} = require('../../models/item');
const fs = require('fs');
const path = require('path');

const addItem = (req,res,next) =>{
    if(!req.file){
        res.status(422).send({
            status:422,
            message:"image  harus di upload"
        });
    }
    try {
        const item = new Item({
            nama_item: req.body.nama_item,
            stok: req.body.stok,
            harga_satuan: req.body.harga_satuan,
            barang: req.file.path
        });
        
        item.save();

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
        let temp = await Item.findById({_id:req.params.id});
        if(req.file){
            
            fs.unlink(path.join(process.env.url_directory + "/" + temp.barang),(err)=>{
                console.log(err)
            });
        }
        const item = {
            nama_item: req.body.nama_item,
            stok: req.body.stok,
            harga_satuan: req.body.harga_satuan,
            barang: temp.barang || req.file.path, 
        };
        
        await Item.findByIdAndUpdate({_id:req.params.id},{$set: item}, {new:true})
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
        let temp = await Item.findById({_id:req.params.id});
        fs.unlink(path.join(process.env.url_directory + "/" + temp.barang),(err)=>{
            console.log(err)
        });
        await Item.findByIdAndDelete({_id:req.params.id})
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
    addItem,
    update,
    deleteData
}