var jokesMainService = angular.module('jokesMainService', ['ngResource']);

jokesMainService.factory('jokesMainService', ['$resource',
  function($resource){
  
    return {
    	GetJokeList : $resource(global.WEBAPI_URL + '/jokes', {}, {query: {method:'GET'}}),
      GetMostLikedList : $resource(global.WEBAPI_URL + '/jokes/mostliked',{}, {query: {method: 'GET'}}),
    	CreateJoke: $resource(global.WEBAPI_URL + '/jokes/create', {},{save: {method: 'POST' , headers: { 'Content-Type': 'application/json'}}}),
      PostLike : $resource(global.WEBAPI_URL + '/jokes/createlike', {},{save: {method: 'PUT' , headers: { 'Content-Type': 'application/json'}}})

	};

  }]);


