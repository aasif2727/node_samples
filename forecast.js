const request = require('request');

var getWeatherForecast = function(coordinates,callback){
    let key = '428834b1b9105c7b7ab44d86bbc73246';
    request({
        url:`https://api.darksky.net/forecast/${key}/${coordinates.lat},${coordinates.lng}`,
        //url:'https://api.darksky.net/forecast/428834b1b9105c7b7ab44d86bbc73246/42.3601,-71.0589',
        json:true
    },function (error, response, body) {
        console.log(response);
        console.log(body);
        console.log(error);
        if(error){
            callback(error);
        }
        else if(response && response.statusCode == 200){
            callback(undefined,body);
        }
    });
};

module.exports = {
    getWeatherForecast
};