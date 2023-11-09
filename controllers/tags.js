const Image = require('../models/image');
const Tag = require('../models/tag');

module.exports = {
    addTag,
    new: newTag,
    create,
    delete: deleteTag,
    edit,
    update
}

//Adds the image to the tag's database
async function addTag(req, res){
    const tags = await Tag.find({})
    const image = await Image.findById(req.params.id);
    const tag = await Tag.findById(req.body.tagId);
    tag.images.push(image);
    tag.save();
    res.redirect(`/images/${image._id}`)
}

//Renders the tag page, sorting tag alphabetically
async function newTag(req, res){
    const tags = await Tag.find({}).sort('description')
    res.render('tags/new', {
        tags,
        title: "Nature"
    })
}

//Creates a new tag and saves it to the database
async function create(req, res){
    try {
        await Tag.create(req.body);
        await Tag.save()
    } catch (err) {
        console.log(err);
    }

    res.redirect('/tags/new')
}

//Deletes a tag from the database
async function deleteTag(req, res){
    await Tag.findByIdAndDelete(req.params.id);
    res.redirect('/tags/new')
}

//Renders the "edit" page for tags
async function edit(req, res){
    const tag = await Tag.findById(req.params.id)
    res.render('tags/edit', {
        tag,
        title: "Nature"
    })
}

//Allows a tag to be edited and saved to the database
async function update(req, res){
    const tag = await Tag.findById(req.params.id);
    tag.description = req.body.tag;
    await tag.save();
    res.redirect('/tags/new');
}