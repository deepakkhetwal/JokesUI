(function(){
	'use strict';
    angular
      .module('video-review.service',['ngResource'])
      .factory('videoReviewService', videoReviewService);
    videoReviewService.$inject = ['$resource'];
	function videoReviewService($resource){
		return{
			getVideoForReview : $resource(appConfig.WEBAPI_URL + '/video/review',{},{query: {method: 'GET'}}) ,
			updateVideoForReview : $resource(appConfig.WEBAPI_URL + '/video/review/update', {},{save: {method: 'PUT' , headers: { 'Content-Type': 'application/json'}}})
		};
	}
})();