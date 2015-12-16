'use strict';

/**
 * @ngdoc function
 * @name androidAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the androidAppApp
 */


angular.module('androidAppApp')
  .controller('MainCtrl', function ($scope, $mdSidenav, $mdDialog, $mdMedia) {
<<<<<<< HEAD
    console.log('');

    $scope.status = '';
    $scope.customFullscreen = $mdMedia('sm');

    this.onSwipeRight = function() {
      $mdSidenav('left').toggle();
      console.log('hacia la derecha!!');
    };

    this.showTabDialog = function(ev, nom) {
        $scope.nombre = nom;
        console.log($scope.nombre);
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'views/descripcion.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
=======
    
    var DialogController = function ($scope, $mdDialog) {      
        $scope.hide = function() {
            $mdDialog.hide();
          };
          $scope.cancel = function() {
            $mdDialog.cancel();
          };
          $scope.answer = function(answer) {
            $mdDialog.hide(answer);
          };
    };
    
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('sm');
    $scope.nombre = 'Especificar';
    $scope.onSwipeRight = function() {
      $mdSidenav('left').toggle();
      console.log('hacia la derecha!!');
    };
    
    $scope.showTabDialog = function(ev, nom) {
        $scope.nombre = nom;
        console.log($scope.nombre);
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/descripcion.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
>>>>>>> 7b531bbffbfa914041f9973a699c2fe05aca3239
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
<<<<<<< HEAD
    };

    function DialogController($scope, $mdDialog) {
        $scope.nombre = 'Especificar';
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    };
});
=======
  };
});





>>>>>>> 7b531bbffbfa914041f9973a699c2fe05aca3239
