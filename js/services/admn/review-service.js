var reviewService = angular.module('reviewService',['ngResource']);
reviewService.factory('reviewService', ['$resource',
	function($resource){
		return{
			GetJokeList : $resource('http://192.168.1.45:3000/admn/review',{},{query: {method: 'GET'}})
		};
	}]);