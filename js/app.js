'use strict';
// var app = angular.module('myEdools', ['ngRoute']);
var app = angular.module('myEdools',['ngRoute','myEdools.controllers','ngLoadingSpinner','angularSpinner']);

app.config(function($routeProvider, $locationProvider)
{
    $locationProvider.hashPrefix('!');
    // remove o # da url
    // $locationProvider.html5Mode(true);

    $routeProvider

        .when('/home', {
            templateUrl: 'views/home.htm',
            controller: 'HomeCtrl'
        })

        .when('/list', {
            templateUrl: 'views/list.htm',
            controller: 'ListCtrl'
        })

        .when('/issues', {
            templateUrl: 'views/issues.htm',
            controller: 'IssuesCtrl'
        })

        .when('/comments', {
            templateUrl: 'views/comments.htm',
            controller: 'CommentsCtrl'
        })
        
        .when('/search', {
            templateUrl: 'views/search.htm',
             controller: 'SearchCtrl'
        })

        .when('/searchcode', {
            templateUrl: 'views/code.htm',
             controller: 'SearchcodeCtrl'
        })

        .otherwise({
            redirectTo: '/home'
        });

});
