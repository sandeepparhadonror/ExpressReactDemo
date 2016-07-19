var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var COMMENTS_FILE = path.join(__dirname, 'comments.json' );
app.set('port', (process.env.PORT || 3000 ));

app.use('/', express.static( path.join(__dirname, 'public' )));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(function(req, res, next){
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache');
  next();
});


app.get('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/comments', function(req, res) {
  console.log("ppppppppposssssssssttttttttt")
  console.log(req.body);
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text,
    };
    comments.push(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(comments);
    });
  });
});

app.listen(app.get('port'), function(){
  console.log("Server are strating on the port http://localhost:"+app.get('port')+'/');
});