angular
    .module('app', [ 'ui.router','auth', 'authentication' ])
    .config(
        function($stateProvider,$urlRouterProvider,$httpProvider) {
        	$urlRouterProvider.otherwise("/")
        	
        	$stateProvider
        	 .state('dashboard', {
             url: "/",
             templateUrl: "dashboard.html"
            })
             .state('login', {
             url: "/login",
             templateUrl: "login.html",
             controller: "authentication"
            })
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        }).run(function(auth){auth.init();});