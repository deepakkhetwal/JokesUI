/**
 * Created by dkhetwal on 12/11/2015.
 */
(function(){
    angular
        .module('exception.config')
        .config(exceptionConfig);
    exceptionConfig.$inject = ['$provide'];
    function exceptionConfig($provide){
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    }
    extendExceptionHandler.$inject = ['$delegate','$log'];

    function extendExceptionHandler($delegate, $log){
        // send error log to backend service
        return function(exception, cause){
            $delegate(exception, cause);
            var errorData = {
                exception: exception,
                cause:cause
            };
        }
    }
})