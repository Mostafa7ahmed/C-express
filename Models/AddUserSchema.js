const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const user = new Schema({
    fristName: String,
    lastName: String,
    email: String, 
    phoneNumber: String,
    age: Number,
    gender: String,
    country: String,
});
 
 const User = mongoose.model("User", user);
 
 module.exports = User;