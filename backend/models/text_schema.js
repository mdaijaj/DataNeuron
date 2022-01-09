const mongoose=require('../database/db');
const Schema = mongoose.Schema

let textStory_schema=  new Schema({
    title: {
       type: String,
       required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
});  

module.exports= mongoose.model('TextStory', textStory_schema);
