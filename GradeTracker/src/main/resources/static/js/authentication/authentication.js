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
		$scope.credentials = angular.copy($scope.newuser)//This is because password gets wiped on save success.
		$scope.newuser.$save(function(data)
		{
			$scope.login();
		}, function(err)
		{
			alert('request failed');
		});
		
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
}).directive('uniqueUsername',['$http', function($http) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
             element.bind('blur', function (e) {
                  ngModel.$loading = true;

                  $http.get("/user/" + element.val()).success(function(data) {
                	 console.log(data);
                     ngModel.$loading = false;
                     ngModel.$setValidity('unique', data.length == 0);
                  });
             });
        }
   };
}]).factory('User',['$resource', function($resource)
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
