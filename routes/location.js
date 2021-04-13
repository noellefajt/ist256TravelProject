var axios = require('axios').default;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //axios.get('https://www.metaweather.com/api/location/2367105/').then(function(response){
    axios.get('https://www.metaweather.com/api/location/search/?query=boston').then((response) => {    
        res.send(response.data);
        //console.log(response);
        //console.log(response.data);
    });
});

module.exports = router;
