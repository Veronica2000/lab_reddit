var app = angular.module("redditLite", ["ngRoute"]);

	app.config(function($routeProvider){
		
		$routeProvider
		.when('/', 
		{	
			controller: 'selectController',
			templateUrl: 'select.html'
    		
		})

		.when('/view', 
		{
			controller: 'viewController',
			templateUrl: 'view.html'
    		
		})

		.otherwise({redirectTo:'/'});

	});