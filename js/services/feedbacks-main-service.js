(function(){
	'use strict';
  angular
    .module('feedbacksMainServiceModule',['ngResource'])
    .factory('feedbacksMainService', feedbacksMainService);
  feedbacksMainService.$inject = ['$resource'];
  function feedbacksMainService($resource){
     return {
    	CreateFeedback: $resource(global.WEBAPI_URL + '/feedbacks/create', {},{save: {method: 'POST' , headers: { 'Content-Type': 'application/json'}}})
  	};
  }
})();

