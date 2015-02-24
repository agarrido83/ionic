(function() {
  'use strict';
  // Pasión Murciana App

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  // 'app.controllers' is found in controllers.js
  angular.module('app', ['ionic', 'app.controllers'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.semana_santa', {
      url: '/semana_santa',
      views: {
        'menuContent': {
          templateUrl: 'templates/semana_santa.html',
          controller: 'SemanaSantaCtrl'
        }
      }
    })

    .state('app.cofradias', {
      url: '/cofradias',
      views: {
        'menuContent': {
          templateUrl: 'templates/cofradias.html',
          controller: 'CofradiasCtrl'
        }
      }
    })

    .state('app.cofradias.cofradia', {
      url: '/{cofradiaId}',
      views: {
        'menuContent': {
          templateUrl: 'templates/cofradia.html',
          controller: 'CofradiaCtrl'
        }
      }
    })

    .state('app.templos', {
      url: '/templos',
      views: {
        'menuContent': {
          templateUrl: 'templates/templos.html',
          controller: 'TemplosCtrl'
        }
      }
    })

    .state('app.pasos', {
      url: '/pasos',
      views: {
        'menuContent': {
          templateUrl: 'templates/pasos.html',
          controller: 'PasosCtrl'
        }
      }
    })

    .state('app.escultores', {
      url: '/escultores',
      views: {
        'menuContent': {
          templateUrl: 'templates/escultores.html',
          controller: 'EscultoresCtrl'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/semana_santa');

  });
})();
