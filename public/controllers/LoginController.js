demoapp.controller('LoginController', function($scope, $rootScope, LoginService,$location){

    var login = $scope.login = {username: '', password:'' }  

    $scope.doLogin = function() {
        console.log("logining, scope", $scope);
        LoginService.signin( login.username, login.password, function(err, user){
           if(!err && user) {
                console.log("LoginCtrl post login OK");
                $rootScope.user = user;
                $location.path("/mods")
            }
            else {
                console.error("Error login", err);
                err && alert("Invalid username or password");
            }
        })
    };

    $scope.adminLogin = function(){
        login.username = 'admin@demo.com';
        login.password = 'demo';
        $scope.doLogin();
    }
    
});
