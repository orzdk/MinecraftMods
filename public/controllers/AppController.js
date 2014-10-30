var demoapp = angular.module('app', ['ngResource', 'ngRoute', 'angoose.client', 'angoose.ui', 'angularMoment'])

.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
           
            $locationProvider.html5Mode({enabled: true, requireBase: false});
            
            $routeProvider.when("/", {templateUrl:'/templates/login.tpl', controller: 'LoginController'})
            .when("/login", {templateUrl:'/templates/login.tpl', controller: 'LoginController'})
            .when("/mods", {templateUrl:'/templates/modlist.tpl', controller: 'ModListController' })
            .when("/mods/edit", {templateUrl:'/templates/modedit.tpl', controller: 'ModEditController'})
            .when("/mods/edit/:id", {templateUrl:'/templates/modedit.tpl', controller: 'ModEditController'});
}])


.controller('AngularAmlController', function($scope, amlusers){
    $scope.amlusers = amlusers;
});




