(function() {
	'use strict';
	angular
		.module('video-review.controller')
		.controller('VideoReviewController', VideoReviewController);
	VideoReviewController.$inject = ['$sce', 'videoReviewService'];
	function VideoReviewController($sce, videoReviewService) {
		var vm = this;
		vm.saveVideoReview = saveVideoReview(id);
		vm.trustSrc = trustSrc(src);
		vm.videoListForReview = videoReviewService.getVideoForReview.query();

		function saveVideoReview(id) {

			var reviewObj = $.grep($scope.videoListForReview.message, function (e) {
				return e.file_id == id;
			});

			var video = JSON.stringify({
				file_id: reviewObj[0].file_id,
				description: reviewObj[0].description,
				isReviewed: reviewObj[0].is_reviewed,
				title: reviewObj[0].title,
				tags: reviewObj[0].tags
			});
			videoReviewService.UpdateVideoForReview.save(video);
			// use notification service here  COMMON.showGlobalMessageAlert("Save successfully!")
		}

		function trustSrc(src) {
			return $sce.trustAsResourceUrl(src);
		}

	}
})();

