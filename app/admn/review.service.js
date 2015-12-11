(function(){
	'use strict';
    angular
      .module('reviewServiceModule',['ngResource'])
      .factory('reviewService', reviewService);
    reviewService.$inject = ['$resource'];
	function reviewService($resource){
		return{
			GetJokeList : $resource(appConfig.WEBAPI_URL + '/admn/review',{},{query: {method: 'GET'}}),
			UpdateJokeReview : $resource(appConfig.WEBAPI_URL + '/admn/review/update', {},{save: {method: 'PUT' , headers: { 'Content-Type': 'application/json'}}})
		};
	}
	
});