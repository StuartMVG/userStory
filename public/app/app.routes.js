angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateURL: 'app/views/pages/home.html'
    })
    .when('/login', {
      templateURL: 'app/views/pages/login.html'
    })


  $locationProvider.html5Mode(true);
})
