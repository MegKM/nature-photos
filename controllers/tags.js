const Image = require('../models/image');
const Tag = require('../models/tag');

module.exports = {
    addTag,
    new: newTag,
    create
}

async function addTag(req, res){
    const tags = await Tag.find({})
    const image = await Image.findById(req.params.id);
    const tag = await Tag.findById(req.body.tagId);
    tag.images.push(image);
    tag.save();
    res.redirect(`/images/${image._id}`)
}

async function newTag(req, res){
    const tags = await Tag.find({}).sort('description')
    res.render('tags/new', {
        tags,
        title: "Nature"
    })
}


async function create(req, res){
    console.log(req.body)
    try {
        await Tag.create(req.body);
        await Tag.save()
    } catch (err) {
        console.log(err);
    }

    res.redirect('/tags/new')
}