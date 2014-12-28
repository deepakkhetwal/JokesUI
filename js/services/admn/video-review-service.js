var videoReviewService = angular.module('videoReviewService',['ngResource']);
videoReviewService.factory('videoReviewService', ['$resource',
	function($resource){
		return{
			GetVideoForReview : $resource(global.WEBAPI_URL + '/video/review',{},{query: {method: 'GET'}}) ,
			UpdateVideoForReview : $resource(global.WEBAPI_URL + '/video/review/update', {},{save: {method: 'PUT' , headers: { 'Content-Type': 'application/json'}}})
		};

		}]);