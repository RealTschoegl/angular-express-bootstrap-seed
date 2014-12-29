'use strict';

myApp.controller('AppCtrl', ['$scope', function($scope) {
	 
	}])

	.controller('IndexCtrl', ['$scope', '$location', 'Sample', '$filter', function($scope, $location, Sample, $filter) {
		Sample.find().then(
			function(data, status){
				var message = data;
				$scope.intro = $filter('capitalize')(data);
			},
			function(){

			}
		)

	}]);