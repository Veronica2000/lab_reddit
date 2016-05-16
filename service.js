var app = angular.module("redditLite");

	app.factory("redditService", function($http){
		
		var subReddit = "";
		
		function getReddit(){
			return $http.get("https://www.reddit.com/r/"+subReddit+"/.json");
					}
			
			return {
				selectSubReddit: function(reddit){
					subReddit = reddit;				
				},
			
			getReddit: getReddit
				
	
			};
		
	});
