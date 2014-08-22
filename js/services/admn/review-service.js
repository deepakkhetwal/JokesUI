var reviewService = angular.module('reviewService',['ngResource']);
reviewService.factory('reviewService', ['$resource',
	function($resource){
		return{
			GetJokeList : $resource('http://kejokesapi.herokuapp.com/admn/review',{},{query: {method: 'GET'}}),
			UpdateJokeReview : $resource('http://kejokesapi.herokuapp.com/admn/review/update', {},{save: {method: 'PUT' , headers: { 'Content-Type': 'application/json'}}})
		};

		}]);