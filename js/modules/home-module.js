var homeModule = angular.module('homeModule',['ngRoute','jokesMainControllers', 'jokesMainService', 'reviewControllers', 'reviewService']);
homeModule.config(['$routeProvider', function($routeProvider){

	$routeProvider.
		when('/', {templateUrl: 'views/jokes_main/jokes-list-partial.html', controller: 'jokesMainCtrl'})
		.when('/jokes/create', {templateUrl: 'views/jokes_main/jokes-post-partial.html', controller:'jokesPostCtrl'})
		.when('/admn/review', {templateUrl: 'views/admn/review/review-list-partial.html', controller:'reviewIndexCtrl'})
		.when('/contact', {templateUrl: 'views/contact.html'})
		.when('/about',{templateUrl: 'views/about.html'});

}])
.factory('$exceptionHandler', function () {
    return function (exception, cause) {
    	alert(exception.message);
      exception.message += ' (caused by "' + cause + '")';
     
    };
});