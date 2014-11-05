demoapp.controller('ModEditController', function($scope, $location, $routeParams, $http, Mod){

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
			if ($scope.function == "Add "){
				$http.post('/text-add', { mod: $scope.addedit });	
			} else {
				$http.post('/text-update', { mod: $scope.addedit });	
			}
			
    		$location.path('/mods');
		});
    }

});
