(function () {
    "use strict";

    var injectedParams = ['$window','SearchControllerServices'],
        SearchController = function ($window,SearchControllerServices) {
            var vm = this;
					
					
				vm.search = function (query){
					if (query.length >4) {
						SearchControllerServices.list(query)
							.then(function (result) {
                 vm.docs = result.data.items;
							})
							.catch(function (err) {
									console.error(err)
							});					
						
					}
					
				}
				vm.redirect = function(url){
//					$window.location.href = url;
					$window.open(url);
				}
					
        };

    SearchController.$inject = injectedParams;
    angular.module('edools').controller('SearchController', SearchController);
}());
