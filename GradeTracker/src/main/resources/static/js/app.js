angular
    .module('app', [ 'ngMessages','ngResource','ui.router','auth', 'authentication','navigation' ])
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
             .state('login.registered',{
             url: "/registered",
             templateUrl: "registered.html",
             controller: "authentication"
            })
             .state('login.register',{
             url: "/user-registration",
             templateUrl: "user-registration.html",
             controller: "authentication"
            })
             
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        }).run(function(auth){auth.init();});