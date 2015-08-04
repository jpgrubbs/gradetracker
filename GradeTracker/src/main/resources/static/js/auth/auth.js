angular.module('auth', []).factory(
'auth',

function($rootScope, $http, $location) {
  enter = function() {
  if ($location.path() != auth.loginPath || $location.path() != auth.registerPath) {
    auth.path = $location.path();
    if (!auth.authenticated) {
      $location.path(auth.loginPath);
      }
    }          
  }
  var auth = {

    authenticated : false,
    registerPath: '/login/user-registration',
    loginPath : '/login/registered',
    logoutPath : '/logout',
    homePath : '/',

    authenticate : function(credentials, callback) {

      var headers = credentials && credentials.username ? {
        authorization : "Basic "
            + btoa(credentials.username + ":"
                + credentials.password)
      } : {};

      $http.get('securityuser', {
        headers : headers
      }).success(function(data) {
        if (data.name) {
          auth.authenticated = true;
        } else {
          auth.authenticated = false;
        }
        $location.path(auth.homePath);
        callback && callback(auth.authenticated);
      }).error(function() {
        auth.authenticated = false;
        callback && callback(false);
      });

    },
    
    clear : function() {
    	  auth.authenticated = false;
    	  $location.path(auth.loginPath);
    	  $http.post(auth.logoutPath, {});
    	},
	init : function() {
        $rootScope.$on('$stateChangeStart', function() {
          enter();
        });
        auth.authenticate({}, function(authenticated) {
            if (authenticated) {
              $location.path(auth.path);
            }
        });
      }

  };

  return auth;

});