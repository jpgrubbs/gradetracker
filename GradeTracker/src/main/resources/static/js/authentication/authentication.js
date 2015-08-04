angular.module('authentication', ['ngResource','ngMessages']).controller(
'authentication', ['$scope','auth','User',

function($scope, auth, User) {

	$scope.credentials = {};
	$scope.newuser = new User;

	$scope.authenticated = function() {
		return auth.authenticated;
	};

	$scope.login = function() {
		auth.authenticate($scope.credentials, function(authenticated) {
			if (authenticated) {
				console.log("Login succeeded")
				$scope.error = false;
			} else {
				console.log("Login failed")
				$scope.error = true;
			}
		})
	};
	
	$scope.register = function() {
		console.log("registering " + $scope.newuser.username);
		$scope.newuser.enabled = 1;
		$scope.newuser.$save();
	    };

	$scope.logout = function() {
      auth.clear();
    };

}]).directive('compareTo', function()
{
    return {
      require: "ngModel",
      scope: {
        otherModelValue: "=compareTo"
      },
      link: function(scope, element, attributes, ngModel) {

        ngModel.$validators.compareTo = function(modelValue) {
          return modelValue == scope.otherModelValue;
        };

        scope.$watch("otherModelValue", function() {
          ngModel.$validate();
        });
      }
    };
}).factory('User',['$resource', function($resource)
	{
	return $resource('/user/:username', {
	      username: '@username'
	    }, {
	      update: {
	        method: "PUT"
	      },
	      save: {
	    	  method: "POST",
	    	  url: "/user"
	      },
	      remove: {
	        method: "DELETE"
	      }
	    });
}]);
