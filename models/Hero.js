const mongoose = require("mongoose");
const heroSchema = new mongoose.Schema({
    Image: String,
    Name:String,
    Power:Number
});
module.exports = mongoose.model("Hero", heroSchema);