var path = require('path');
var express = require('express');
var app = express();
var request = require('request');

// Serve static files
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/search/:text', function(req, res){
    var requestURL = "https://api.twelvedata.com/time_series?symbol=";
    requestURL += req.params.text + "&interval=1min&apikey=a03bb8e0b67446d88622e220c2fdea8c";
    console.log(requestURL);

    request(requestURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {

            res.render('search.ejs', {infoData: body});

        }
    })
});

app.get('/stocks', function(req, res){
    var requestURL = "https://api.twelvedata.com/stocks&country=USA";
    request(requestURL, function(error, response, body){
        if(!error && response.statusCode == 200){
            res.render('stocks.ejs', {infoData: body});
        }
    });
});

// Route for everything else.
app.get('*', function(req, res){
    res.render('index.ejs');
});


// Fire it up!
app.listen(3000);
console.log('Listening on port 3000');