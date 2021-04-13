var axios = require('axios').default;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    axios.get("https://gis.cityofboston.gov/arcgis/rest/services/EnvironmentEnergy/OpenData/MapServer/3/query?where=Name_of_Pr%20%3D%20'INTERNATIONAL%20TRUST%20COMPANY%20BUILDING'&outFields=Name_of_Pr&returnGeometry=false&outSR=4326&f=json").then(function(response){
        res.send(response.data);
    });
    
});

module.exports = router;