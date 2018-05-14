const geolocation = require('./geolocation');
const forecast = require('./forecast');
const yargs = require('yargs');
const chalk = require('chalk');

const command  = yargs
.options('address',{
    title:{
        describe:'type a address',
        demand:true,
        alias:'t'
    }
})
.help()
.argv;

geolocation.getLocationDetails(command.option,(error,result)=>{
  if(error){
      console.log(error);
  }
  else if(result){
      forecast.getWeatherForecast(result,(error,result)=>{
          if(error){
              console.log(error);
          }
          else if(result){
              console.log(result);
          }
      });     
  }
});






