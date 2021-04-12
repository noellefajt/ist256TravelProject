var axios = require('axios').default;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    
    axios.get('https://www.metaweather.com/api/location/2487956/').then(function(response){
        res.send(response.data);
    });
});

module.exports = router;
