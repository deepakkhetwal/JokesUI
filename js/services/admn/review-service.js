var reviewService = angular.module('reviewService',['ngResource']);
reviewService.factory('reviewService', ['$resource',
	function($resource){
		return{
			GetJokeList : $resource(global.WEBAPI_URL + '/admn/review',{},{query: {method: 'GET'}}),
			UpdateJokeReview : $resource(global.WEBAPI_URL + '/admn/review/update', {},{save: {method: 'PUT' , headers: { 'Content-Type': 'application/json'}}})
		};

		}]);