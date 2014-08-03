var jokesMainService = angular.module('jokesMainService', ['ngResource']);

jokesMainService.factory('jokesMainService', ['$resource',
  function($resource){
  	
    return {
    	GetJokeList : $resource('http://localhost:3000/jokes', {}, {query: {method:'GET'}}),
    	CreateJoke: $resource('http://localhost:3000/jokes/create', {},{save: {method: 'POST' , headers: { 'Content-Type': 'application/json'}}})
	};
  //  return $resource('http://localhost:3000/jokes/create', {},{
  //  	save: {method: 'POST'}
	//});
  }]);



// got it from https://docs.angularjs.org/tutorial/step_11