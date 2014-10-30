
demoapp.controller('ModListController', function($scope, $location, Mod){
    
    var mods = $scope.mods = Mod.$query();

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
		    mods.splice(mods.indexOf(mod), 1);    
		});
    };

});

