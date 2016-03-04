'use strict';

/**
 * @ngdoc function
 * @name desafioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desafioApp
 */
angular.module('desafioApp')
  .controller('MainCtrl', ['$scope','$http', function($scope,$http) {

    $scope.reposLoaded = false;

    $scope.userLoaded = false;

    $scope.username = 'mariana-martins';

    $http.get('https://api.github.com/users/' + $scope.username)
      .success(function (data) {
        $scope.userData = data;
        loadRepos();
      });

    var loadRepos = function () {
      $http.get($scope.userData.repos_url)
        .success(function (data) {
          $scope.repoData = data;
        });
    };

    $scope.predicate = '-updated_at';
  }]);



/*
 {
 "login": "mariana-martins",
 "id": 15526228,
 "avatar_url": "https://avatars.githubusercontent.com/u/15526228?v=3",
 "gravatar_id": "",
 "url": "https://api.github.com/users/mariana-martins",
 "html_url": "https://github.com/mariana-martins",
 "followers_url": "https://api.github.com/users/mariana-martins/followers",
 "following_url": "https://api.github.com/users/mariana-martins/following{/other_user}",
 "gists_url": "https://api.github.com/users/mariana-martins/gists{/gist_id}",
 "starred_url": "https://api.github.com/users/mariana-martins/starred{/owner}{/repo}",
 "subscriptions_url": "https://api.github.com/users/mariana-martins/subscriptions",
 "organizations_url": "https://api.github.com/users/mariana-martins/orgs",
 "repos_url": "https://api.github.com/users/mariana-martins/repos",
 "events_url": "https://api.github.com/users/mariana-martins/events{/privacy}",
 "received_events_url": "https://api.github.com/users/mariana-martins/received_events",
 "type": "User",
 "site_admin": false,
 "name": "Mariana Martins Menezes",
 "company": null,
 "blog": "https://br.linkedin.com/in/marianamenezes",
 "location": "Niterói, Rio de Janeiro / Brazil",
 "email": null,
 "hireable": null,
 "bio": null,
 "public_repos": 20,
 "public_gists": 0,
 "followers": 0,
 "following": 0,
 "created_at": "2015-10-31T21:21:09Z",
 "updated_at": "2016-02-28T13:30:48Z"
 }*/
