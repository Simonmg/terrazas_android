'use strict';

/**
 * @ngdoc function
 * @name androidAppApp.controller: sidebarController
 * @description
 * # SidebarController
 * Controller of the androidAppApp
 */

angular.module('androidAppApp')
.controller('MenuCtrl', function ($scope, $timeout, $mdSidenav) {
    console.log('controlador del sidebar');
    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
    
});
