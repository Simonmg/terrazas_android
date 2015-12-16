'use strict';

/**
 * @ngdoc overview
 * @name androidAppApp
 * @description
 * # androidAppApp
 *
 * Main module of the application.
 */
angular
  .module('androidAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
  ])
  .config(function ($routeProvider, $mdIconProvider, $mdThemingProvider) {
<<<<<<< HEAD
    $mdThemingProvider.theme('default').primaryPalette('green');
=======
    $mdThemingProvider.theme('default').primaryPalette('orange');
>>>>>>> 7b531bbffbfa914041f9973a699c2fe05aca3239
    $mdIconProvider.defaultIconSet('images/icons/mdi.svg');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
<<<<<<< HEAD
  }).service('ControlDescrip', function () {
        var dialogo;
        this.set = function (nombre, descripcion) {
            dialogo = {nombre: nombre, descripcion: descripcion};
        };
        this.get = function () {
            return dialogo;
        };
});
=======
  });

>>>>>>> 7b531bbffbfa914041f9973a699c2fe05aca3239
