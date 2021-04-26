var axios = require('axios').default;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("hello");
    axios.get('https://www.metaweather.com/api/location/2367105/').then(function(response){
    //axios.get('https://www.metaweather.com/api/location/search/?query=boston').then((response) => {    
        console.log("hello ;)");
        res.send(response.data);
        console.log(response);
        //console.log(response.data);
    });
});

module.exports = router;
