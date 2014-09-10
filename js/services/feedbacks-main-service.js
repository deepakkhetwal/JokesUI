var feedbacksMainService = angular.module('feedbacksMainService', ['ngResource']);

feedbacksMainService.factory('feedbacksMainService', ['$resource',
  function($resource){
  	//throw { message: 'error message hello' };
    return {
    	//GetJokeList : $resource('http://kejokesapi.herokuapp.com/jokes', {}, {query: {method:'GET'}}),
    	CreateFeedback: $resource('http://kejokesapi.herokuapp.com/feedbacks/create', {},{save: {method: 'POST' , headers: { 'Content-Type': 'application/json'}}})
	};
  //  return $resource('http://localhost:3000/jokes/create', {},{
  //  	save: {method: 'POST'}
	//});
//http://kejokesapi.herokuapp.com/jokes/create
  }]);


