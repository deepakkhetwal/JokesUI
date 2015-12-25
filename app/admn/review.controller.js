(function(){
	'use strict';
	angular
		.module('review.controller',[])
		.controller('ReviewController',ReviewController);
	ReviewController.$inject = ['reviewService'];
	function ReviewController(reviewService){
		var vm = this;
		vm.jokesList = reviewService.getJokeList.query();
		vm.predicate = '-date_created';
		vm.saveReview = saveReview(id);

		function saveReview(id){
			var reviewObj = $.grep(vm.jokesList.jokes, function (e) { return e._id == id; });

			var joke = JSON.stringify({id : reviewObj[0]._id ,description : reviewObj[0].description, isReviewed : reviewObj[0].is_reviewed, userEmail : reviewObj[0].user_email, jokeCategory: reviewObj[0].joke_category  });
			reviewService.updateJokeReview.save(joke);
		}
	}
})();


