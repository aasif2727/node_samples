const request = require('request');

var getLocationDetails = function(loc,callback){
    let location = encodeURIComponent(loc);
    request({
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${location}`,
        json:true
    },function (error, response, body) {
        if(error){
            callback(error);
        }
        else if(body.status === 'ZERO_RESULTS'){
            callback('Invalid address');
        }
        else if(response && response.statusCode == 200){
            let address = {
                formatted_address:body.results[0].formatted_address,
                lat:body.results[0].geometry.location.lat,
                lng:body.results[0].geometry.location.lng
            };
            callback(undefined,address);
        }
    });
};

module.exports = {
    getLocationDetails
};