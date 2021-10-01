const {Customer} = require('../../models/customer');
const fs = require('fs');
const path = require('path');

const addCustomer = (req,res,next) =>{
    if(!req.file){
        res.status(422).send({
            status:422,
            message:"ktp harus di upload"
        });
    }
    try {
        const customer = new Customer({
            nama: req.body.nama,
            contact: req.body.contact,
            email: req.body.email,
            alamat: req.body.alamat,
            diskon: req.body.diskon,
            tipe_diskon: req.body.tipe_diskon,
            ktp: req.file.path
        });
        
        customer.save();

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
        let temp = await Customer.findById({_id:req.params.id});
        if(req.file){
            
            fs.unlink(path.join(process.env.url_directory + "/" + temp.ktp),(err)=>{
                console.log(err)
            });
        }

        const customer = {
            nama: req.body.nama,
            contact: req.body.contact,
            email: req.body.email,
            alamat: req.body.alamat,
            diskon: req.body.diskon,
            tipe_diskon: req.body.tipe_diskon,
            ktp: temp.ktp || req.file.path
        };
        
        await Customer.findByIdAndUpdate({_id:req.params.id},{$set: customer}, {new:true})
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
        let temp = await Customer.findById({_id:req.params.id});
        fs.unlink(path.join(process.env.url_directory + "/" + temp.ktp),(err)=>{
            console.log(err)
        });
        await Customer.findByIdAndDelete({_id:req.params.id})
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
    addCustomer,
    update,
    deleteData
}