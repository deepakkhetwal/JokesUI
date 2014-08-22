var jokesMainControllers =  angular.module('jokesMainControllers',[]);
jokesMainControllers.controller('jokesMainCtrl', ['$scope', 'jokesMainService', function($scope, jokesMainService){

	

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
            
             
           
        }
 
        // initial table load
        loadJokes();
 
	
}]);

jokesMainControllers.controller('jokesPostCtrl',['$scope','jokesMainService','$location', function($scope, jokesMainService, $location){
 $scope.submit = function() {
 var joke = JSON.stringify({Description : $scope.jokeDescription, joke_category : $scope.joke_category, user_email : $scope.user_email});
  //   newCard.description = "Mike Smith";
 jokesMainService.CreateJoke.save(joke);
 $location.path("/");
};

}])