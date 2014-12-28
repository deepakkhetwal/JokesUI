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
        $scope.PostLike = function(id) {
        var joke = JSON.stringify({id : id , is_liked : true});
        jokesMainService.PostLike.save(joke);
        var _numLikes = parseInt($("#cnt"+ id).text()) + 1;
        $("#cnt"+ id).text(_numLikes);
        $("#"+ id).show();
         
          
        };

}]);

