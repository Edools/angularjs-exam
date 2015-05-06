'use strict';

/**
 * @ngdoc function
 * @name myghApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myghApp
 */
angular.module('myghApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
