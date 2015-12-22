(function(){
    'use strict';
    angular
        .module('jokes-main.controller')
        .controller('JokesMainController', JokesMainController);
    JokesMainController.$inject = ['$location','$filter','jokesMainService'];
    function JokesMainController($location,$filter,jokesMainService){
        var vm = this;
        vm.dataLoaded = false;
        vm.jokesList = [];
        vm.postLike = postLike;
        loadJokes();
        function loadJokes() {
            vm.dataLoaded = false;
            jokesMainService.getJokeList
                .query(function(data){
                    vm.jokesList = data;
                    vm.dataLoaded = true;
            });
        }

        function postLike(id){
            var joke = JSON.stringify({id : id , is_liked : true});
            jokesMainService.PostLike.save(joke);
            var _numLikes = parseInt($("#cnt"+ id).text()) + 1;
            $("#cnt"+ id).text(_numLikes);
            $("#"+ id).show();
        }

    }
})();


