'use strict';

/**
 * @ngdoc function
 * @name zapatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zapatonApp
 */
angular.module('zapatonApp')
  .controller('MainCtrl', function ($translate, $scope, $location) {
    $scope.preferredLanguage = $translate.preferredLanguage();

    $scope.setLanguage = function(lang) {
      $translate.preferredLanguage(lang);
      $scope.preferredLanguage = lang;
      $translate.use(lang);
    };

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

  });
