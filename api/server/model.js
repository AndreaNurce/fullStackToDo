const mongoose = require('mongoose')

let dataSchema = new mongoose.Schema({
        day: { type: String },
        data : {type : String ,required : true},
        important : Boolean 
});

    let Data = new mongoose.model('Data' , dataSchema);

module.exports = Data 