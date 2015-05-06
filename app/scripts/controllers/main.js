'use strict';

/**
 * @ngdoc function
 * @name myghApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myghApp
 */
angular.module('myghApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
