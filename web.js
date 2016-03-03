var gzippo = require('gzippo');
var express = require('express');
var app = express();
var request = require('request');

var config = {
  GITHUB_CLIENT_ID: '9a1baa2d9dca3bb50bb9',
  GITHUB_CLIENT_SECRET: 'dd90297f82ae9efa5734c71c6b6aaab5aa5030c3',
  GITHUB_TOKEN_URL: 'https://github.com/login/oauth/access_token'
};

var appDir = process.env.NODE_ENV == 'production' ? '/dist' : '/.tmp/serve';

/**
 * Proxy resource dirs in development mode
 */
if (process.env.NODE_ENV != 'production') {
  app.use('/bower_components', gzippo.staticGzip('' + __dirname + '/bower_components'))
  app.use('/assets', gzippo.staticGzip('' + __dirname + '/src/assets'))
}

app.use(gzippo.staticGzip('' + __dirname + appDir));

app.get('/auth/callback', function (req, res) {

  var code = req.query.code;

  var options = {
    url: config.GITHUB_TOKEN_URL,
    headers: {
      Accept: 'application/json'
    },
    form: {
      code: code,
      client_id: config.GITHUB_CLIENT_ID,
      client_secret: config.GITHUB_CLIENT_SECRET
    }
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.redirect('/?token=' + data.access_token);
    }
  }

  request(options, callback);
});

app.listen(process.env.PORT || 5000);

console.log('Server Started!');
