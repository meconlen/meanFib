var fibApp = angular.module('fibApp', []);
fibApp.controller('FibController', ['$scope', '$http', function($scope, $http) {
	$scope.n = 1;
	$scope.updateFib = function() {
		$http.get('/fib/' + $scope.n).
			success(function(data, status, headers, config) {
				$scope.Fibn = data.Fn;
			});
		// var chartData = {
		// 	labels: [],
		// 	datasets: [
		// 		{
		// 			label: "Fibonacci Numbers",
		// 			data: []
		// 		}
		// 	]
		// };
		// var chartOptions = {
		// 	bezierCurve : false,
		// 	datasetFill: true
		// };
		// $http.get('/fibs/' + $scope.n).success(function(data, status, headers, config) {
		// 	for(var i = 0; i < data.length; i++) {
		// 		chartData.labels.push(data[i].n);
		// 		chartData.datasets[0].data.push(Number(data[i].Fn));
		// 	}
		// 	var ctx = document.getElementById("fibChart").getContext("2d");
		// 	var FibChart = new Chart(ctx).Line(chartData, chartOptions);
		// 	console.dir(chartData);
		// });
		$http.get('/fibs/' + $scope.n).success(function(data, status, headers, config) {
			for(var iter = 0; iter < data.length; iter++) {
				data[iter][0] = (data[iter][0] - 1) * 86400 * 1000;
			}
			var chart = new Highcharts.StockChart({
				chart: {
					renderTo: 'fibChart'
				},
				rangeSelector: {
					selected: 1
				},
				series: [{
					name: "Fibonnaci Numbers",
					data: data
				}]
			},	function() { console.log("rendered Highcharts.StockChart()"); }
			);
		});
	};
}]);