var jokesMainControllers =  angular.module('jokesMainControllers',[]);
jokesMainControllers.controller('jokesMainCtrl', ['$scope', 'jokesMainService', function($scope, jokesMainService){

	$scope.jokesList = jokesMainService.GetJokeList.query();
	
}]);

jokesMainControllers.controller('jokesPostCtrl',['$scope','jokesMainService','$location', function($scope, jokesMainService, $location){
 $scope.submit = function() {
 var joke = JSON.stringify({Description : $scope.jokeDescription, joke_category : $scope.joke_category, user_email : $scope.user_email});
  //   newCard.description = "Mike Smith";
 jokesMainService.CreateJoke.save(joke);
 $location.path("/jokes");
};

}])