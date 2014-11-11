var jokesMostLikedControllers =  angular.module('jokesMostLikedControllers',[]);
jokesMostLikedControllers.controller('jokesMostLikedCtrl', ['$scope', 'jokesMainService',
 function($scope, jokesMainService){
      function loadJokes() {
            $scope.dataLoaded = false;
            $scope.jokesList = null;
          $scope.jokesList = jokesMainService.GetMostLikedList.query(function(){$scope.dataLoaded = true;});
         // $scope.order('likesCount', false);
      
        }
 
        // initial table load
        loadJokes();
}]);

