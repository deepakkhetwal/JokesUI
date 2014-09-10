var feedbacksMainControllers =  angular.module('feedbacksMainControllers',[]);


feedbacksMainControllers.controller('feedbacksPostCtrl',['$scope','feedbacksMainService', function($scope,feedbacksMainService){
 $scope.submit = function() {
    
     var feedback = JSON.stringify({description : $scope.description, contact_no : $scope.contact_no, user_email : $scope.user_email});
      //   newCard.description = "Mike Smith";
     feedbacksMainService.CreateFeedback.save(feedback);
    
     showGlobalMessageAlert("Thanks for you feed back! please <a href='#/'>click here </a> to go to the jokes list "); 


};

}])