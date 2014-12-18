'use strict';

myApp.service('Sample', ['$http', '$q', function($http, $q) {
	var Sample = {
		find: function(){
			var deferred = $q.defer();
      $http({
        method: 'GET',
        url: "/api/sample",
        headers: {"Content-type": "application/x-www-form-urlencoded"},
      }).success(function(data, status, headers, config) {
        deferred.resolve(data, status);
      }).error(function(data, status, headers, config) {
        deferred.reject({message: data, status: status});
      });
      return deferred.promise;
		}
	};
	return Sample;
}]);