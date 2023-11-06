const Image = require('../models/image');
const Tag = require('../models/tag');

module.exports = {
    index,
    show
}

async function index(req, res){
    const images = await Image.find({});
    console.log(images);
    res.render('images/search', {
        images,
        title: "Nature"
    });
}

async function show(req, res){
    const image = await Image.findById(req.params.id);
    const tags = await Tag.find({});
    
    res.render('images/show', {
        image,
        tags,
        title: "Nature"}
    );
}