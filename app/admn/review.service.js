(function(){
	'use strict';
    angular
      .module('review.service',['ngResource'])
      .factory('reviewService', reviewService);
    reviewService.$inject = ['$resource'];
	function reviewService($resource){
		return{
			getJokeList : $resource(appConfig.WEBAPI_URL + '/admn/review',{},{query: {method: 'GET'}}),
			updateJokeReview : $resource(appConfig.WEBAPI_URL + '/admn/review/update', {},{save: {method: 'PUT' , headers: { 'Content-Type': 'application/json'}}})
		};
	}
	
})();