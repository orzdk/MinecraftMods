demoapp.controller('ModListController', function($scope, $location, $pusher, $http, Mod){
	
	var mods = $scope.mods = Mod.$query();
	
	var client = new Pusher('e4b965532659219d0afd');
	var pusher = $pusher(client);
	var mod_update_channel = pusher.subscribe('test-channel');
	
	mod_update_channel.bind('update-event', function(data) {

		console.log('data.socket_id');
		console.log(data.socket_id);

		obj = _.find(mods, function(obj) { return obj._id == data.mod._id });
		obj.modname = data.mod.modname;
		obj.modversion = data.mod.modversion;
		obj.author_url = data.mod.author_url;
		obj.forum_url = data.mod.forum_url;
		obj.download_url = data.mod.download_url;
		obj.dependencies = data.mod.dependencies;
		obj.modtype = data.mod.modtype;
		obj.lastchecked = data.mod.lastchecked;
		obj.modupdate = data.mod.modupdate;
	 });

	mod_update_channel.bind('add-event', function(data) {
		newmod = new Mod({
			modid:0,
			modname: data.mod.modname,
			modversion: data.mod.modversion,
			author_url: data.mod.author_url,
			forum_url: data.mod.forum_url,
			download_url: data.mod.download_url,
			dependencies: data.mod.dependencies,
			modtype: data.mod.modtype,
			lastchecked: data.mod.lastchecked,
			modupdate: data.mod.modupdate
		});
		
		mods.push(newmod);	
	});
	
	mod_update_channel.bind('delete-event', function(data) {
		obj = _.find(mods, function(obj) { return obj._id == data.mod._id });
		mods.splice(mods.indexOf(obj), 1);   
	});
	 	 

    $scope.saveMod = function(){
    	var newmod = new Mod({
		   modid: 0,			
	       modname: $scope.addedit.modname,		
	       modversion: $scope.addedit.modversion,
		   author_url: $scope.addedit.author_url, 		
		   forum_url: $scope.addedit.forum_url,	
		   download_url: $scope.addedit.download_url,	
		   dependencies: $scope.addedit.dependencies,	
		   modtype: $scope.addedit.modtype,		
		   lastchecked: $scope.addedit.lastchecked, 
		   modupdate: $scope.addedit.modupdate
    	});

    	newmod.save(function(err,res){
            if(err) return alert(err);
            mods.push(newmod);
            $location.path('/mods'); 
        });
    }

    $scope.updateMod = function(mod){
    	$location.path('/mods/edit/' + mod._id);
    } 
    
	$scope.removeMod = function (mod) {           
		mod.remove(function(err, res){
			$http.post('/text-delete', { mod: mod });
		});
    };

});

demoapp.controller('OnbeforesaveCtrl', function($scope, $location, $http) {
	$scope.saveMod = function(mod) {
		mod.save(function(err){
			$http.post('/text-update', { mod: mod });	
			$location.path('/mods');
		});
	};
});

