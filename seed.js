require('dotenv').config();
require('./config/database');

const Tag = require('./models/tag');

async function addTags(){
    await Tag.create({description: "Trees"});
};

addTags();