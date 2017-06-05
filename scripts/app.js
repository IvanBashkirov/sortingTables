(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html'
      })
      .state('profile', {
        url: '/profile/:id',
        controller: 'ProfileCtrl as profile',
        templateUrl: '/templates/profile.html'
      });
  }
  angular
    .module('polecat', ['ui.router', 'ui.bootstrap'])
    .config(config);
})();
