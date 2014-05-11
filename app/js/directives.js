'use strict';

/* Directives */


angular.module('myApp.directives', []).

directive('infiniteScroll', ['$window', function($window) {
	return {
      restrict: 'A',
      link: function(scope, elem, attr){
   

        angular.element($window).bind('scroll', function() 
        {
        	var elementBottom, remaining, shouldScroll, windowBottom;
            windowBottom = $window.screen.height + document.body.scrollTop
            elementBottom = elem[0].offsetTop + elem[0].offsetHeight;
            remaining = elementBottom - windowBottom;
            shouldScroll = remaining <= $window.screen.height * 2;

            if (shouldScroll) {            
                scope.$apply(attr.infiniteScroll);
            }
        });
       

      }
    };
}]);


