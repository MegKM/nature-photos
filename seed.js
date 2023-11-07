require('dotenv').config();
require('./config/database');

const Tag = require('./models/tag');

async function addTags(){
    await Tag.create({description: "Animal"});
    await Tag.create({description: "Desert"});
    await Tag.create({description: "Flower"});
    await Tag.create({description: "Mountain"});
    await Tag.create({description: "Nature"});
    await Tag.create({description: "Sky"});
    await Tag.create({description: "Tree"});
    await Tag.create({description: "Water"});
    Tag.bulkSave();
};

addTags();