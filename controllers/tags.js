const Image = require('../models/image');
const Tag = require('../models/tag');

module.exports = {
    addTag,
    // create
}

async function addTag(req, res){
    const tags = await Tag.find({})
    const image = await Image.findById(req.params.id);
    const tag = await Tag.findById(req.body.tagId);
    tag.images.push(image);
    tag.save();
    res.redirect(`/search/${image._id}`)
}

// async function create(req, res){
//     const image = await Image.findById(req.params.id);

//     try {
//         const tag = await Tag.create(req.body);
//         tag.images = image;
//         await image.save()
//         res.redirect(`search/${image._id}`)
//     } catch (err) {
//         console.log(err);
//         // newTicket();
//     }
// }