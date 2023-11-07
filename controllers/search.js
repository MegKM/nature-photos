const Image = require('../models/image');
const Tag = require('../models/tag');

module.exports = {
    index,
    show,
    filterByTag
}

async function index(req, res){
    const images = await Image.find({});
    const tags = await Tag.find({});
    res.render('images/search', {
        images,
        tags,
        title: "Nature"
    });
}

async function show(req, res){
    const image = await Image.findById(req.params.id);
    const tags = await Tag.find({});
    const currentTags = await Tag.where('images').in([req.params.id]);
    res.render('images/show', {
        image,
        tags,
        currentTags,
        title: "Nature"}
    );
}

async function filterByTag(req, res){
    const tags = await Tag.find({});
    const tag = await Tag.findOne({description: req.params.tagName}).populate('images');
    console.log("tag: ", tag)
    const images = tag.images;
    console.log('images: ', images)
    res.render('images/search', {
        images,
        tags,
        title: "Nature"
    });
}