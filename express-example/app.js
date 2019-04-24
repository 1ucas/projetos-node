// Imports
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const request = require('request');

// Variáveis de Ambiente
const app = express();
const porta = 3000;
const publicAssets = path.join(__dirname, "/public");
const viewsPath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "/templates/partials");

// Configurações
app.use(express.static(publicAssets));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        author: 'Lucas Maciel'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        author: 'Lucas Maciel'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        author: 'Lucas Maciel'
    });
});

app.get('/cotacoes/:id', (req, res) => {
    
    const tradingRequest = {
        url : 'https://www.worldtradingdata.com/api/v1/stock?symbol=' + req.params.id + '&api_token=6dQYGIFS9wAzgj3Yz6kxXMYV9G6LDKsbHT5KWCYrSoBfe30wkLsHqS1bFNTR',
        json : true
    };

    request(tradingRequest, function (error, response, body) {
        
        const element = body.data[0];
        
        res.render('cotacoes', {
            title: 'Cotacoes',
            author: 'Lucas Maciel',
            company_name : element.name,
            high_value : element.day_high,
            low_value: element.day_low
        });
    });
});

app.get('/people/:id', (req,res) => {
    if(req.params.id === '1'){
        const pessoa = {
            name : 'Lucas',
            age: 10
        };
        res.status(200).json(pessoa);
    } else {
        res.status(404).end();
    }
});

// Start do Servidor
app.listen(porta, () =>{});
