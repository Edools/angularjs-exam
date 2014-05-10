angular
  .module('ngGithub.controllers', [
    'ngGithub.factories'
  ])
  .controller('repoController', function ($scope, repoFactory, $languages) {
    'use strict';
    $scope.languages = $languages;

    repoFactory.list($languages[0].name)
      .success(function (result) {
        $scope.repos = result.items;
      })
      .error(function (err) {
        //
      });
  });
