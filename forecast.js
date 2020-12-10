var unirest = require('unirest');
var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));
app.get('/', function(req, res){
unirest.get("https://community-open-weather-map.p.rapidapi.com/forecast")
  .header("X-RapidAPI-Key", '8f60426a15msh1477fb75b9d3e27p15f428jsnbb8133a48ba9')
  .header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
  .query({
        'appid': '35588b8d2b9ec29d7898603b16f767c1',
        'q': 'Ampton',
        'units': 'metric'
  })
  .end(function (result) {
        res.render('index', {data:result.body});
  });
})
app.listen(8081, function(){
  console.log('Server running at http://127.0.0.1:8081/');
})