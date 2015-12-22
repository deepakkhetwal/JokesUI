(function(){
	angular
		.module('app',['ui.router',
			'jokes-main.controller',
			'jokes-most-liked.controller',
			'jokes-post.controller',
			'feedback.controller',
			'jokes-main.service',
			'feedback.service'

		])
		.config(function($stateProvider){
			$stateProvider
				.state('home',{
					url: '/',
					templateUrl: 'views/jokes-list.html',
					controller: 'JokesMainController',
					controllerAs: 'vm'
				})
				.state('mostLiked',{
					url: '/mostliked',
					templateUrl: 'views/jokes-most-liked.html',
					controller: 'JokesMostLikedController',
					controllerAs: 'vm'
				})
				.state('submitJokes',{
					url: '/submitjokes',
					templateUrl: 'views/jokes-post.html',
					controller: 'JokesPostController',
					controllerAs: 'vm'
				})
				.state('contactUs',{
					url: '/contactus',
					templateUrl: 'views/contact-us.html'
				})
				.state('postFeedback',{
					url: '/postfeedback',
					templateUrl: 'views/feedback-post.html',
					controller: 'FeedbackController'
				});

		});
})();