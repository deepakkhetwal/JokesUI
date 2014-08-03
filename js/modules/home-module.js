var homeModule = angular.module('homeModule',['ngRoute','jokesMainControllers', 'jokesMainService']);
homeModule.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/jokes', {templateUrl: 'views/jokes_main/jokes-list-partial.html', controller: 'jokesMainCtrl'})
		.when('/jokes/create', {templateUrl: 'views/jokes_main/jokes-post-partial.html', controller:'jokesPostCtrl'})
		.when('/contact', {templateUrl: 'views/contact.html'});

}]);

