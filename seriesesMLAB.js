var mongoose = require('mongoose'),

    schema = mongoose.Schema,
    seriesesSchema = new schema({
        id: {type:Number, required:true},
        name: {type:String, index:1, required:true, unique:true},
        day: String,
        month: String,
        year: String,
        network: String,
        season: Number,
    }, {collection:'serieses'});
    
module.exports = seriesesSchema;