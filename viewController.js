var app = angular.module("redditLite");

	app.controller("viewController", function($scope, redditService){

			
			redditService.getReddit().then(function(response){
			$scope.posts = response.data.data.children;
		
		});