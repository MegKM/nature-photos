
const fs = require('fs');

const client = '2ReIQtryuhSGI8k02nsWTFJQI4gzuY8OW7Uclp17uMc7SdPJtfXbkVfq';
const query = 'Snow';

// All requests made with the client will be authenticated

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

