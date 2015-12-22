(function(){
    'use strict';
    angular
        .module('jokes-most-liked.controller')
        .controller('JokesMostLikedController',JokesMostLikedController);
    JokesMostLikedController.$inject = ['jokesMainService'];
    function JokesMostLikedController(jokesMainService){
        var vm = this;
        vm.dataLoaded = false;
        vm.jokesList = [];
        vm.postLike = postLike(id);
        loadJokes();
        function loadJokes(){
            $scope.jokesList = jokesMainService.GetMostLikedList.query(function(){$scope.dataLoaded = true;});
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

