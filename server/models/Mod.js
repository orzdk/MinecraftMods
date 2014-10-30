var angoose = require('angoose'); 
var mongoose = angoose.getMongoose();

var modSchema = mongoose.Schema({

	   modid: 			{type: Number,  tags:['default-list'], label:'modid'},
       modname: 		{type: String,  tags:['default-list'], label:'modname'},
       modversion: 		{type: String,  tags:['default-list'], label:'modversion'},
	   author_url: 		{type: String,  tags:['default-list'], label:'author_url'},
	   forum_url: 		{type: String,  tags:['default-list'], label:'forum_url'},
	   download_url: 	{type: String,  tags:['default-list'], label:'download_url'},
	   dependencies: 	{type: String,  tags:['default-list'], label:'dependencies'},
	   modtype: 		{type: Number,  tags:['default-list'], label:'modtype'},
	   lastchecked: 	{type: String,  tags:['default-list'], label:'lastchecked'},
	   modupdate: 		{type: Boolean, tags:['default-list'], label:'modupdate'}
 
});

module.exports = mongoose.model('Mod', modSchema);

