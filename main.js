require('dotenv').config();
require('./config/database');

const Image = require('./models/image');


const nature = require('./databases/nature');

// const emptyDatabase = async () => {
//     await Image.deleteMany({});
// };

// emptyDatabase();

nature.forEach(async (nature) => {
    const n = new Image(nature);
    await n.save();
});



