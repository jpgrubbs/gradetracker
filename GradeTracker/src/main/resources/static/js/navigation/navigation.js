angular.module('navigation', []).controller(
'navigation',

function($scope, $http) {
	$http.get('/user/').success(function(data) {
		$scope.user = data.name;
	})
});
	