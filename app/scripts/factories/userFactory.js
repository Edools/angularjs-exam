'use strict';

angular.module('queroTrabalharNoEdoolsFrontendApp').factory('User', function ($http) {
  var factory = {};

  factory.info = function (user) {
    return $http.get("https://api.github.com/users/" + user);
  };

  factory.repositories = function (user) {
    return $http.get("https://api.github.com/users/" + user + "/repos");
  };

  return factory;
});
