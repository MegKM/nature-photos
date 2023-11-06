const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const natureSchema = new Schema({
   id: Number,
   url: String,
   photographer: String,
   photographer_url: String,
   photographer_id: Number,
   avg_color: String,
   src:{
       original:String,
       large2x: String,
       large: String,
       medium: String,
       small: String,
       portrait: String,
       landscape:String,
       tiny: String},
   liked: Boolean,
   alt: String
});

module.exports = mongoose.model('Image', natureSchema);