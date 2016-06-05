require('getmodule');
var express = require('express');
var app      = express();

var index = require('./js/app');

app.use(express.static(__dirname + '/public'));
// This is where all the magic happens!
// app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Swig will cache views for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// // var express = require('express'),
// //     routes = require('./routes'),
// //     api = require('./routes/api');
//
// var app = module.exports = express.createServer();
//
// // Configuration
//
// app.configure(function(){
//     app.set('views', __dirname + '/views');
//     app.set('view engine', 'html');
//     app.set('view options', {
//         layout: false
//     });
//     app.use(express.bodyParser());
//     app.use(express.methodOverride());
//     app.use(express.static(__dirname + '/public'));
//     app.use(app.router);
// });

// var app = express();
// var path = require('path');
// app.use(express.static(path.join(__dirname, '/views')));
// This covers serving up the index page
// app.use(express.static(path.join(__dirname, '../client/.tmp')));
// app.use(express.static(path.join(__dirname, '../client/app')));
//
//  var url = '/index.htm';
//  path.join(process.cwd(), 'static', url);
// app.use(express.static(__dirname + '/views'));
// app.use(express.static(path.join(process.cwd(), 'static', url)));
// // app.use(express.static(__dirname + '/index.htm'));
// app.set('view engine', 'htm');
// app.get('/', function (req, res) {
//     res.render('index.htm', {});
// });
app.use('/', index);

app.use(function(req, res, next) {
    req.app = app;
    next();
});
var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});module.exports = app;
