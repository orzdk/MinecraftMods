demoapp.controller('ModEditController', function($scope, $location, $routeParams, Mod){

	var idtoedit = $routeParams.id;

	if (idtoedit){
	    Mod.findOne({_id: idtoedit}, function(err, res){
			$scope.addedit = res;

		});
		$scope.function = "Edit ";
	}
	else {
		var newmod = new Mod();
		$scope.addedit = newmod;
		$scope.function = "Add ";
	}


    $scope.saveMod = function(){
    	$scope.addedit.save(function(err){
    		$location.path('/mods');
		});
    }

});
