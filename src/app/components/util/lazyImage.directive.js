export function LazyImageDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    link: link,
    scope: {
      src: '='
    },
    template: '<img class="img-responsive" ng-show="loaded" src="{{src}}"/>'
  };

  return directive;

  function link(scope) {
    'ngInject';

    let i = new Image();
    i.src = scope.src;
    i.onload = function() {
      scope.$apply(()=> {
        scope.loaded = true;
      })
    }
  }
}
