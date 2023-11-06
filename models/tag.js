const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema ({
    description: String,
    images:[{
        type: Schema.Types.ObjectId,
        ref: 'Image'
    }]
});

module.exports = mongoose.model('Tag', tagSchema);