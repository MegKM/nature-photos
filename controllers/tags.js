const Image = require('../models/image');
const Tag = require('../models/tag');

module.exports = {
    new: newTag,
    // create
}

async function newTag(req, res){
    const image = await Image.findById(req.params.id);
    res.redirect(`search/${image._id}`,{ 
        image, 
        title: "Nature"
    })
}

// async function create(req, res){
//     const image = await Image.findById(req.params.id);

//     try {
//         const tag = await Ticket.create(req.body);
//         ticket.flight = flight;
//         await ticket.save()
//         res.redirect(`/flights/${flight._id}`)
//     } catch (err) {
//         console.log(err);
//         newTicket();
//     }
// }