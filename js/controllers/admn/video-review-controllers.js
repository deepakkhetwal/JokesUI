var videoReviewControllers = angular.module('videoReviewControllers',[]);

videoReviewControllers.controller('videoReviewCtrl',['$scope','$sce', 'videoReviewService', function($scope, $sce, videoReviewService)
{
	$scope.videoListForReview = videoReviewService.GetVideoForReview.query();
	$scope.trustSrc = function(src) {
    	return $sce.trustAsResourceUrl(src);
  	};
  	$scope.SaveVideoReview = function(id){
		
		var reviewObj = $.grep($scope.videoListForReview.message, function (e) { return e.file_id == id; });
		
		var video = JSON.stringify({file_id : reviewObj[0].file_id ,
			description : reviewObj[0].description, 
			isReviewed : reviewObj[0].is_reviewed,
			title : reviewObj[0].title, 
			tags: reviewObj[0].tags});
		videoReviewService.UpdateVideoForReview.save(video);
		COMMON.showGlobalMessageAlert("Save successfully!")
	};
	/*$scope.predicate = '-date_created';
	 */
}])
