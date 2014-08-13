var jokesMainService = angular.module('jokesMainService', ['ngResource']);

jokesMainService.factory('jokesMainService', ['$resource',
  function($resource){
  	
    return {
    	GetJokeList : $resource('http://192.168.1.45:3000/jokes', {}, {query: {method:'GET'}}),
    	CreateJoke: $resource('http://192.168.1.45:3000/jokes/create', {},{save: {method: 'POST' , headers: { 'Content-Type': 'application/json'}}})
	};
  //  return $resource('http://localhost:3000/jokes/create', {},{
  //  	save: {method: 'POST'}
	//});
  }]);



// got it from https://docs.angularjs.org/tutorial/step_11