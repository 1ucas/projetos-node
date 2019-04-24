
const request = require('request');

request('https://www.worldtradingdata.com/api/v1/stock?symbol=PETR4.SA&api_token=6dQYGIFS9wAzgj3Yz6kxXMYV9G6LDKsbHT5KWCYrSoBfe30wkLsHqS1bFNTR', function (error, response, body) {
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the body
  
  JSON.parse(body).data.forEach(element => {
      console.log("Nome Ativo: " + element.symbol);
      console.log("Nome Empresa: " + element.name);
      console.log("Maior Valor: " + element.day_high);
      console.log("Menor Valor: " + element.day_low);
  });
});