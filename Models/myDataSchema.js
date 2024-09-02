const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const articleSchema = new Schema({
    title: String,
    summary: String,
    body: String, 
});
 
 const MyData = mongoose.model("Mydata", articleSchema);
 
 module.exports = MyData;