const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const documentModel= new Schema({
    _id: String,
    data: Object
})

module.exports= mongoose.model("Document",documentModel);