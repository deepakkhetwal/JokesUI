/**
 * Created by dkhetwal on 12/11/2015.
 */
(function () {
    'use strict';
    angular
        .module('jokes-post.controller')
        .controller('JokesPostController', JokesPostController);
    JokesPostController.$inject = ['jokesMainService'];
    function JokesPostController(jokesMainService){
        var vm = this;
        vm.submitJoke = submitJoke;
        function submitJoke(){
            var joke = JSON.stringify({description : vm.jokeDescription, joke_category : vm.jokeCategory, user_email : vm.userEmail});
            jokesMainService.createJoke.save(joke, function(data){

            },function(error){

            });
            vm.jokeDescription = "";
            COMMON.showGlobalMessageAlert("Your joke submitted successfully!. will be posted after being reviewed. You can post another Joke on the same screen.");
        }
    }
})();