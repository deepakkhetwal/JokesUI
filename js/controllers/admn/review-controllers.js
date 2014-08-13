var reviewControllers = angular.module('reviewControllers',[]);
reviewControllers.controller('reviewIndexCtrl',['$scope', 'reviewService', function($scope, reviewService)
{
	$scope.jokesList = reviewService.GetJokeList.query();
}])

reviewControllers.controller('updateReviewCtrl', ['$scope', '$reviewService', function($scope, reviewService)
{
	$scope.SaveReview = function(){
		var joke = JSON.stringify({description : $scope.description,  })
	}
}])