const express = require('express')
const app = express()
const axios = require('axios')



app.get("/api", (req, res, next) => {
  console.log("'/api' call");
  axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/436121")
    .then(response => res.json(response.data))
    .catch(err => next(err));
})

app.listen(5000, () => { console.log("Server starting on port 5000");})