const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    cpassword:String
});

module.exports =  mongoose.model("User", userSchema)