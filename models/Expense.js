const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    description: { type: String }
});


const cardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    count: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    description: { type: String }
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    birthday: { type: Date, default: Date.now },
    role: {type : String , enum : ["user" , "admin"]},
});

const dashboardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    create : { type: Date, default: Date.now },
    count : {type : Number , required: true},
});


module.exports = mongoose.model('Expense', expenseSchema);