var app = angular.module('watchuWant');

app.controller('WatchController', function($scope, watchService){
	$scope.test = "Watches of the World";


	$scope.getWatches = function(){
		watchService.getWatches().then(function(data){
			$scope.watches = data.data;
			console.log(data.data);
		});
	}
	$scope.getWatches();
});