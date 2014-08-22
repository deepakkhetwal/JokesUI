var jokesMainService = angular.module('jokesMainService', ['ngResource']);

jokesMainService.factory('jokesMainService', ['$resource',
  function($resource){
  	
    return {
    	GetJokeList : $resource('http://kejokesapi.herokuapp.com/jokes', {}, {query: {method:'GET'}}),
    	CreateJoke: $resource('http://kejokesapi.herokuapp.com/jokes/create', {},{save: {method: 'POST' , headers: { 'Content-Type': 'application/json'}}})
	};
  //  return $resource('http://localhost:3000/jokes/create', {},{
  //  	save: {method: 'POST'}
	//});
  }]);


