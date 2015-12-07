(function(){
	'use strict';
    angular
      .module('videoReviewServiceModule',['ngResource'])
      .factory('videoReviewService', videoReviewService);
    videoReviewService.$inject = ['$resource'];
	function videoReviewService($resource){
		return{
			GetVideoForReview : $resource(global.WEBAPI_URL + '/video/review',{},{query: {method: 'GET'}}) ,
			UpdateVideoForReview : $resource(global.WEBAPI_URL + '/video/review/update', {},{save: {method: 'PUT' , headers: { 'Content-Type': 'application/json'}}})
		};
	}
});