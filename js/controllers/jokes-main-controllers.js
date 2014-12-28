var jokesMainControllers =  angular.module('jokesMainControllers',[]);
jokesMainControllers.controller('jokesMainCtrl', ['$scope', '$location','$filter','jokesMainService', function($scope, $location, $filter, jokesMainService){

	   var orderBy = $filter('orderBy');
	   
       $scope.order = function(predicate, reverse) {

        $scope.jokesList = orderBy($scope.jokesList, predicate, reverse);
      };
 
        function loadJokes() {
        	$scope.dataLoaded = false;
        	$scope.jokesList = null;
          $scope.jokesList = jokesMainService.GetJokeList.query(function(){$scope.dataLoaded = true;});
         // $scope.order('likesCount', false);
      
        }
 
        // initial table load
        loadJokes();

        $scope.loadJokes = function(){loadJokes();};

        $scope.PostLike = function(id) {
       
          
          var joke = JSON.stringify({id : id , is_liked : true});
          jokesMainService.PostLike.save(joke);
          var _numLikes = parseInt($("#cnt"+ id).text()) + 1;
          $("#cnt"+ id).text(_numLikes);
          $("#"+ id).show();
         
          
        };

        $scope.mostLiked = function(){
          $scope.jokesList = jokesMainService.GetMostLikedList.query();
        };
	
}]);

jokesMainControllers.controller('jokesPostCtrl',['$scope','jokesMainService', function($scope, jokesMainService){
 $scope.submit = function() {
    
     var joke = JSON.stringify({Description : $scope.jokeDescription, joke_category : $scope.joke_category, user_email : $scope.user_email});
      //   newCard.description = "Mike Smith";
     jokesMainService.CreateJoke.save(joke);
     $scope.jokeDescription = "";
     COMMON.showGlobalMessageAlert("Your joke submitted successfully!. will be posted after being reviewed. You can post another Joke on the same screen."); 



};




}]);