var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
session = require('express-session'),
methodOverride = require('method-override'),
fs = require("fs"),
Pusher = require('pusher');
 
/* pusher 
app.post('/pusher/auth', function(req, res) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = pusher.authenticate( socketId, channel, {
    user_id: "" + Math.floor(Math.random() * (1000 - 1) + 1),
    user_info: { username: req.body.username }
  });
  res.send( auth );
});*/

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: '1234567890QWERTY', saveUninitialized: true, resave: true	}));
app.use(methodOverride());

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '95470',
  key: 'e4b965532659219d0afd',
  secret: 'b9c2551414f9ef1ac0a5'
});

app.listen(process.env.PORT || 5000);

var options = {
    extensions:['angoose-users',   'angoose-ui', 'angoose-authorization'], 
    'module-dirs':  './server',
    logging:'TRACE',
    clientFile:'angoose-client-generated.tmp',
    'angoose-ui-template-dir':"./angoose-ui-templates",
    mongo_opts:'localhost:27017/angaml' ,
    'angoose-authorization':{
        'model-name':'Role'
    }    

};    

require("angoose").init(app, options);

function angularaml(req, res){
    res.writeHead(200, { "Content-Type" : "text/html" });
    fs.createReadStream("./public/index.html").pipe(res); 
}

app.get("/", angularaml);
app.get("/login", angularaml);
app.get("/mods", angularaml);

app.post('/text-update', function(req, res) {
  pusher.trigger('test-channel', 'update-event', req.body);
});

app.post('/text-add', function(req, res) {
  pusher.trigger('test-channel', 'add-event', req.body);
});

app.post('/text-delete', function(req, res) {
  pusher.trigger('test-channel', 'delete-event', req.body);
});


function send(json){
 return function(req, res){
  res.send(json);
 };
}

