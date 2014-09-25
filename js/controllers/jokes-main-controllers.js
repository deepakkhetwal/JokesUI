var jokesMainControllers =  angular.module('jokesMainControllers',[]);
jokesMainControllers.controller('jokesMainCtrl', ['$scope', '$location','jokesMainService', function($scope, $location, jokesMainService){

	

	   $scope.pagingInfo = {
            page: 1,
            itemsPerPage: 1,
            sortBy: 'date_created',
            reverse: false,
            search: '',
            totalItems: 0
        };
         
        $scope.search = function () {
            $scope.pagingInfo.page = 1;
            loadJokes();
        };
 
        $scope.sort = function (sortBy) {
            if (sortBy === $scope.pagingInfo.sortBy) {
                $scope.pagingInfo.reverse = !$scope.pagingInfo.reverse;
            } else {
                $scope.pagingInfo.sortBy = sortBy;
                $scope.pagingInfo.reverse = false;
            }
            $scope.pagingInfo.page = 1;
            loadJokes();
        };
 
        $scope.selectPage = function (page) {
            $scope.pagingInfo.page = page;
            loadJokes();
        };
 
        function loadJokes() {
        	
        	$scope.jokesList = null;
            $scope.jokesList = jokesMainService.GetJokeList.query();
           // $scope.predicate = '-date_created';
             
           
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

jokesMainControllers.controller('jokesPostCtrl',['$scope','jokesMainService', function($scope, jokesMainService){
 $scope.submit = function() {
    
     var joke = JSON.stringify({Description : $scope.jokeDescription, joke_category : $scope.joke_category, user_email : $scope.user_email});
      //   newCard.description = "Mike Smith";
     jokesMainService.CreateJoke.save(joke);
     $scope.jokeDescription = "";
     showGlobalMessageAlert("Your joke submitted successfully!. will be posted after being reviewed. You can post another Joke on the same screen."); 



};




}]);