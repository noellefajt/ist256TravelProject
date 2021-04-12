var axios = require('axios').default;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    
    axios.get('https://opendata.arcgis.com/datasets/7a7aca614ad740e99b060e0ee787a228_3.geojson').then(function(response){
        res.send(response.data);
        console.log(response);
        console.log(response.data);
    });
});

module.exports = router;
