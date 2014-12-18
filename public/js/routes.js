'use strict';

myApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
		$routeProvider.when('/', {
				templateUrl: 'partial/index',
				controller: 'IndexCtrl',
			});
		$routeProvider.otherwise({redirectTo: '/'});
		$locationProvider.html5Mode(true);
}]);

myApp.run(['$rootScope', '$location', 'Login', function($rootScope, $location) {
	$rootScope.$on('$routeChangeStart', function(event, to) {
		
	})
}]);