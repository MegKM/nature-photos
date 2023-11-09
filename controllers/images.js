const Image = require('../models/image');
const Tag = require('../models/tag');
const User = require('../models/user');

module.exports = {
    index,
    show,
    filterByTag,
    delete: deleteTagFromImage
}

//Renders all the images currently in the database
async function index(req, res){
    const images = await Image.find({});
    const tags = await Tag.find({}).sort('description');
    res.render('images/images', {
        images,
        tags,
        title: "Nature"
    });
}

//Shows one specific image from the database, based on the images ID
async function show(req, res){
    const image = await Image.findById(req.params.id);
    const tags = await Tag.find({}).sort('description');
    const currentTags = await Tag.where('images').in([req.params.id]);
    const user = req.user;
    res.render('images/show', {
        image,
        tags,
        currentTags,
        user,
        title: "Nature"}
    );
}

//Filters all images in the database based on the tag selected and displays them
async function filterByTag(req, res){
    const tags = await Tag.find({}).sort('description');
    const tag = await Tag.findOne({description: req.params.tagName}).populate('images');
    const images = tag.images;
    res.render('images/images', {
        images,
        tags,
        title: "Nature"
    });
}

//Allows the user to remove a tag from an image, updates the datatbase
async function deleteTagFromImage(req, res){
    const tag = await Tag.findOne({description: req.params.tagName})
    const image = await Image.findById(req.params.id);
    const index = tag.images.indexOf(image._id)
    if (index !== -1){
        tag.images.splice(index, 1);
    }
    await tag.save();
    res.redirect(`/images/${image._id}`)
}