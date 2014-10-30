var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
session = require('express-session'),
methodOverride = require('method-override'),
fs = require("fs");
 
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: '1234567890QWERTY', saveUninitialized: true, resave: true	}));
app.use(methodOverride());

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

function send(json){
 return function(req, res){
  res.send(json);
 };
}

