require('dotenv').config();
require('./config/database');

const Image = require('./models/image');
const nature = require('./databases/nature');

//Can be used to empty the database and upload new images

// const emptyDatabase = async () => {
//     await Image.deleteMany({});
// };

// emptyDatabase();

nature.forEach(async (nature) => {
    const n = new Image(nature);
    await n.save();
});



