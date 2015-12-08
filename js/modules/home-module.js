(function(){
	angular
		.module('homeModule',['ngRoute',
			'jokesMainControllers', 
			'jokesMainServiceModule', 
			'reviewControllers', 
			'reviewServiceModule',
			'feedbacksMainControllers',
			 'feedbacksMainServiceModule',
			 'jokesMostLikedControllers'
		])
		.config(['$routeProvider', function($routeProvider){
			$routeProvider.
			when('/', {templateUrl: 'views/jokes_main/jokes-list-partial.html', controller: 'jokesMainCtrl'})
			.when('/jokes/mostliked',{templateUrl: 'views/jokes_main/jokes-most-liked-partial.html', controller: 'jokesMostLikedCtrl'})
			.when('/jokes/create', {templateUrl: 'views/jokes_main/jokes-post-partial.html', controller:'jokesPostCtrl'})
			.when('/admn/review', {templateUrl: 'views/admn/review/review-list-partial.html', controller:'reviewIndexCtrl'})
			.when('/contact', {templateUrl: 'views/contact.html'})
			.when('/about',{templateUrl: 'views/about.html'})
			.when('/jokes/uploadmessage', {templateUrl: 'views/upload/jokes-video-upload-message.html'})
			.when('/feedbacks/create', {templateUrl: 'views/feedback/feedbacks-post-partial.html', controller: 'feedbacksPostCtrl'});
			}])
		.factory('$exceptionHandler', function () {
    return function (exception, cause) {
    	alert(exception.message);
      exception.message += ' (caused by "' + cause + '")';
     	};
		});

});