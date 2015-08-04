angular.module('navigation', []).controller(
'navigation',

function($scope, $http) {
	$http.get('/securityuser/').success(function(data) {
		$scope.user = data.name;
	})
});
	