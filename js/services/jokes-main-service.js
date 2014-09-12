var jokesMainService = angular.module('jokesMainService', ['ngResource']);

jokesMainService.factory('jokesMainService', ['$resource',
  function($resource){
  	//throw { message: 'error message hello' };
    return {
    	GetJokeList : $resource('http://kejokesapi.herokuapp.com/jokes', {}, {query: {method:'GET'}}),
    	CreateJoke: $resource('http://kejokesapi.herokuapp.com/jokes/create', {},{save: {method: 'POST' , headers: { 'Content-Type': 'application/json'}}}),
      PostLike : $resource('http://kejokesapi.herokuapp.com/jokes/createlike', {},{save: {method: 'POST' , headers: { 'Content-Type': 'application/json'}}})
	};
  //  return $resource('http://localhost:3000/jokes/create', {},{
  //  	save: {method: 'POST'}
	//});
//http://kejokesapi.herokuapp.com/jokes/create
  }]);


