const mongoose=require('../database/db');
const Schema = mongoose.Schema

let videoImageStory_schema=  new Schema({
    
    name: {
        type: String,
        // required: true,
    },
    imageVideo_url: {
        type: String,
        // data: Buffer
    },
    time: {
        type: Date
    },
    types: {
        type: String,
        // required: true,
    }
}, {
    timestamps: true
});  


const ImageVideoStory=mongoose.model('ImageVideoStory', videoImageStory_schema);
module.exports= ImageVideoStory;
