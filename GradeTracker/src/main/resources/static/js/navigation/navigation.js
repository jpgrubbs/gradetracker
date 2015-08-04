angular.module('navigation', []).controller(
'navigation', ['auth', '$scope', '$http',

function(auth, $scope, $http) {
	$http.get('/securityuser/').success(function(data) {
		$scope.user = data.name;
	})
	
	$scope.logout = function() {
	      auth.clear();
	    };
}]);
	