var app = angular.module("redditLite");
	
	app.controller("selectController", function($scope, redditService, $location){

		$scope.getReddit = function(redditCat) {
			redditService.selectSubReddit(redditCat)
			$location.path('/view');
		};
	});