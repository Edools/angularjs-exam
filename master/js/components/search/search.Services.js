(function () {
    "use strict";

    var injectedParams = ['$http'],
        SearchControllerServices = function ($http) {
//https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc'
						var url = 'https://api.github.com/search/repositories?q=';
					  var factory = {};

					factory.list = function (query) {
                return $http.get(url+query);
            };

					return factory;
				};

    SearchControllerServices.$inject = injectedParams;
    angular.module('edools').factory('SearchControllerServices', SearchControllerServices);
}());
