const mongoose = require("mongoose");

const Employee = new mongoose.Schema({
    employeeName:{
        type:String,
        required:[true, 'Please add employee name']
    },
    title:{
        type:String,
        required:[true, 'Please add employee title']
    },
    email:{
        type:String,
        required:[true, 'Please add email'],
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model('Employees', Employee);