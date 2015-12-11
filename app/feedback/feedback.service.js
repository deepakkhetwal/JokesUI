(function(){
	'use strict';
  angular
    .module('feedback.service',['ngResource'])
    .factory('feedbackService', feedbackService);
  feedbackService.$inject = ['$resource'];
  function feedbackService($resource){
     return {
    	createFeedback: $resource(appConfig.WEBAPI_URL + '/feedbacks/create', {},{save: {method: 'POST' , headers: { 'Content-Type': 'application/json'}}})
  	};
  }
})();

