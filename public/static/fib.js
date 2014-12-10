var fibApp = angular.module('fibApp', []);
fibApp.controller('FibController', ['$scope', '$http', function($scope, $http) {
	$scope.n = 1;
	$scope.updateFib = function() {
//		$scope.Fibn = 999;
		$http.get('/fib/' + $scope.n).
			success(function(data, status, headers, config) {
				$scope.Fibn = data;
			});
	};
}]);