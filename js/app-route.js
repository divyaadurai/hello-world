var TwitRoute = {};

TwitRoute = angular.module('twitMockupApp');

TwitRoute.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	
	console.log('Config');
	
	// $urlRouterProvider.when('/','Login');
	
	$urlRouterProvider.otherwise(function ($injector) {
		var $state = $injector.get("$state");
       	$state.go("Login");
   	});
	
	$stateProvider.state('Login', {
		"url": "/login",
		"templateUrl": "view/login-screen.html",
		"controller": "LoginController"
	});
	
}]);