var homeModule = angular.module('homeModule',['ngRoute','jokesMainControllers', 'jokesMainService', 'reviewControllers', 'reviewService'
	, 'feedbacksMainControllers', 'feedbacksMainService', 'jokesMostLikedControllers', 
	'videoReviewControllers', 'videoReviewService'
	]);
homeModule.config(['$routeProvider', function($routeProvider){

	$routeProvider.
		when('/', {templateUrl: 'views/jokes_main/jokes-list-partial.html', controller: 'jokesMainCtrl'})
		.when('/jokes/mostliked',{templateUrl: 'views/jokes_main/jokes-most-liked-partial.html', controller: 'jokesMostLikedCtrl'})
		.when('/jokes/create', {templateUrl: 'views/jokes_main/jokes-post-partial.html', controller:'jokesPostCtrl'})
		.when('/admn/review', {templateUrl: 'views/admn/review/review-list-partial.html', controller:'reviewIndexCtrl'})
		.when('/contact', {templateUrl: 'views/contact.html'})
		.when('/contact2',{templateUrl:'views/contact2.html'})
		.when('/about',{templateUrl: 'views/about.html'})
		.when('/jokes/videolist', {templateUrl: 'views/jokes_main/jokes-list-videos-partial.html'})
		.when('/jokes/upload', {templateUrl: 'views/upload/jokes-video-upload.html'})
		.when('/jokes/uploadmessage', {templateUrl: 'views/upload/jokes-video-upload-message.html'})
		.when('/feedbacks/create', {templateUrl: 'views/feedback/feedbacks-post-partial.html', controller: 'feedbacksPostCtrl'})
		.when('/admn/videoReview', {templateUrl: 'views/admn/review/video-review-list-partial.html', controller: 'videoReviewCtrl'})
		 ;

}])
.factory('$exceptionHandler', function () {
    return function (exception, cause) {
    	alert(exception.message);
      exception.message += ' (caused by "' + cause + '")';
     
    };
});