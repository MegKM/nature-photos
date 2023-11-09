
const fs = require('fs');

const client = '2ReIQtryuhSGI8k02nsWTFJQI4gzuY8OW7Uclp17uMc7SdPJtfXbkVfq';
const query = 'Snow';

//Used the Pexel API to get image data from Pixel and save down as a json file. This information was then converted to a js file and used to seed the image
//database in Atlas.

fetch(`https://api.pexels.com/v1/search?query=${query}`,{
  headers: {
    Authorization: client
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     console.log(data.photos[0].src)
     fs.writeFileSync('snow.json', JSON.stringify(data));
   })

