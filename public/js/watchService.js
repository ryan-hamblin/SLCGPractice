var app = angular.module('watchuWant');

app.service('watchService', function ($http){

	this.getWatches = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:3000/watches'
		});
	}
});