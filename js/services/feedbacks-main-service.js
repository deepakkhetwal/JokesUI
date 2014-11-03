var feedbacksMainService = angular.module('feedbacksMainService', ['ngResource']);

feedbacksMainService.factory('feedbacksMainService', ['$resource',
  function($resource){
  	
    return {
    	
    	CreateFeedback: $resource(global.WEBAPI_URL + '/feedbacks/create', {},{save: {method: 'POST' , headers: { 'Content-Type': 'application/json'}}})
	};
 
  }]);


