var unirest = require('unirest');
var express = require('express');
var app = express();

app.get('/', function(req, res){
unirest.get("https://community-open-weather-map.p.rapidapi.com/weather")
  .header("X-RapidAPI-Key", '8f60426a15msh1477fb75b9d3e27p15f428jsnbb8133a48ba9')
  .header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
  .query({
      'appid': '35588b8d2b9ec29d7898603b16f767c1',
      'lon': '12.4924',
      'lat': '41.8902',
      'units': 'metric',
      'mode': 'html'
  })
  .end(function (result) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(result.body);
      console.log('Colosseum, I am coming!');
  });
})
app.listen(8081, function(){
  console.log('Server running at http://127.0.0.1:8081/');
})