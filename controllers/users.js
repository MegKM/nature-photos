const User = require('../models/user');
const cloudinary = require('../utilities/cloudinary');
const Image = require('../models/image');

module.exports = {
    index,
    show,
    create,
    addFavourite
}

function index(req, res){
    const users = User.find({});
    res.render('users/index', {
        users,
        title: "Users"
    })
}

//Shows the user their own unique page of favourited images
async function show(req, res){
    const user = await User.findById(req.params.id).populate('images');
    const images = await Image.find({});
    res.render('users/show', {
        user,
        images,
        title: "Profile", 
});
}

//Gets the images id and adds it to the user's database
async function addFavourite(req, res){
    const image = await Image.findById(req.params.id)
    const user = req.user
    user.images.push(image)
    user.save();
    res.redirect(`/images/${image._id}`)
}


// Future functionality of allowing uses to upload their own images
async function create(req, res){
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        let user = new User({
            name: req.body.name,
            avatar: result.secure_url,
            cloudinary_id: result.public_id
        })
        await user.save()
        res.redirect(`/users.${user.id}`);
    } catch(err) {
    console.log(err);
    }
}


