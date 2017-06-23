var TwitModule = {};

(function(){

	TwitModule.module = angular.module('twitMockupApp',['ui.router','ngAnimate']);

	TwitModule.module.controller('LoginController', ['$scope', function($scope){
		console.log('LoginController');
	
	}]);
	
})();