/**
 * Created by dkhetwal on 12/11/2015.
 */
(function(){
    'use strict';
    angular
        .module(notification.service)
        .factory('notificationService',notificationService);
        notificationService.$inject = ['logger'];
        function notificationService(logger){
            var service = {
                info: info,
                error: error
            };
            return service;
            function info(message){
                toastr.info(message);
            }
            function error(message){
                toastr.error(message);
            }
        }
})();