(function(){
    'use strict';
    angular
      .module('jokes-main.service',['ngResource'])
      .factory('jokesMainService', jokesMainService);
    jokesMainService.$inject = ['$resource'];
    function jokesMainService($resource){
      return {
    	getJokeList : $resource(appConfig.WEBAPI_URL + '/jokes', {}, {query: {method:'GET'}}),
        getMostLikedList : $resource(appConfig.WEBAPI_URL + '/jokes/mostliked',{}, {query: {method: 'GET'}}),
    	createJoke: $resource(appConfig.WEBAPI_URL + '/jokes/create', {},{save: {method: 'POST' , headers: { 'Content-Type': 'application/json'}}}),
        postLike : $resource(appConfig.WEBAPI_URL + '/jokes/createlike', {},{save: {method: 'PUT' , headers: { 'Content-Type': 'application/json'}}})
	   };
    }
  })();


