(function(){
    'use strict';
    angular
        .module('feedback.controller',[])
        .controller('FeedbackController', FeedbackController);
    FeedbackController.$inject = ['feedbackService'];
    function  FeedbackController(feedbackService){
        var vm = this;
        vm.submit = submit;
        function submit(){
            var feedback = JSON.stringify({description : vm.description, contact_no : vm.contact_no, user_email : vm.user_email});
            //   newCard.description = "Mike Smith";
            feedbackService.createFeedback.save(feedback);

            //use notification service and use success, failure//COMMON.showGlobalMessageAlert("Thanks for you feed back! please <a href='#/'>click here </a> to go to the jokes list ");
        }
    }
})();
