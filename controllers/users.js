const User = require('../models/user');
const cloudinary = require('../utilities/cloudinary');

module.exports = {
    index,
    show,
    create
}

function index(req, res){
    const users = User.find({});
    res.rend('users/index', {title: "Users", users})
}

async function show(req, res){
    // const user = await User.findById(req.paras.id);
    // res.render('users/show', {title: "Users Details", user});
}

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
};
