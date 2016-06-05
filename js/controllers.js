'use strict';

var app = angular.module('myEdools.controllers', ['ngRoute', 'ngLoadingSpinner', 'angularSpinner']);

app.controller('HomeCtrl', [function () {

}]);

app.controller('ListCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.username = "gilcierweb";

    $http.get("https://api.github.com/users/" + $scope.username)
        .success(function (data) {
            $scope.username_data = data;
        })
        .error(function () {
            $scope.userNotFound = true;
        });

    $http.get("https://api.github.com/users/" + $scope.username + "/repos")
        .success(function (data) {
            $scope.username_data_repositories = data;
        })
        .error(function () {
            $scope.userNotFound = true;
        });

}]);

app.controller('IssuesCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.username = "gilcierweb";

    $scope.Search_issues = function () {

        var config = {
            params: {
                q: $scope.query,
                sort: 'stars',
                order: 'desc'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        $http.get("https://api.github.com/search/issues", config)
            .success(function (data) {
                $scope.search_data = data;
            })
            .error(function () {
                $scope.userNotFound = true;
            });

    };


}]);

app.controller('CommentsCtrl', [function () {

}]);

app.controller('RepositoriesCtrl', [function () {
    $scope.username = "gilcierweb";
    $http.get("https://api.github.com/users/" + $scope.username + "/repos")
        .success(function (data) {
            $scope.repos = data;
        });
}]);

app.controller('SearchCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.Search = function () {

        var config = {
            params: {
                q: $scope.query,
                sort: 'stars',
                order: 'desc'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        $http.get("https://api.github.com/search/repositories", config)
            .success(function (data) {
                $scope.search_data = data;
                console.log($scope.search_data);
            })
            .error(function () {
                $scope.userNotFound = true;
            })
    };
}]);

app.controller('SearchcodeCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.Search_code = function () {

        $http.get("https://api.github.com/search/code?q=" + $scope.query + "+in:file+language:" + $scope.language + "+repo:" + $scope.repository)
            .success(function (data) {
                $scope.search_code_data = data;
                console.log($scope.search_code_data);
            })
            .error(function () {
                $scope.userNotFound = true;
            })
    };
}]);
