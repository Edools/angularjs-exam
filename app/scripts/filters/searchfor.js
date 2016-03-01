'use strict';

/**
 * @ngdoc overview
 * @name edoolsApp
 * @description
 * # edoolsApp
 *
 * Filter of main page.
 */
 angular
   .module('edoolsApp')
 .filter('searchFor', function(){
    return function(arr, filterString){
        if(!filterString){
            return arr;
        }
        var result = [];
        filterString = filterString.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.name.toLowerCase().indexOf(filterString) !== -1){
            result.push(item);
        }
        });
        return result;
    };
});
