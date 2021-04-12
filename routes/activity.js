var axios = require('axios').default;
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    
    axios.get('https://gis.cityofboston.gov/arcgis/rest/services/EnvironmentEnergy/OpenData/MapServer/3/query?where=1%3D1&outFields=*&outSR=4326&f=json').then(function(response){
        res.send(response.data);
        console.log(response.data);
        
    });
});

module.exports = router;
