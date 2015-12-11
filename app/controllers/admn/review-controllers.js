var reviewControllers = angular.module('reviewControllers',[]);

reviewControllers.controller('reviewIndexCtrl',['$scope', 'reviewService', function($scope, reviewService)
{
	$scope.jokesList = reviewService.GetJokeList.query();
	$scope.predicate = '-date_created';
	$scope.SaveReview = function(id){
		
		var reviewObj = $.grep($scope.jokesList.jokes, function (e) { return e._id == id; });
		
		var joke = JSON.stringify({id : reviewObj[0]._id ,description : reviewObj[0].description, isReviewed : reviewObj[0].is_reviewed, userEmail : reviewObj[0].user_email, jokeCategory: reviewObj[0].joke_category  });
		reviewService.UpdateJokeReview.save(joke);
	};
}])

