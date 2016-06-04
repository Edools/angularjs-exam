export function MalarkeyDirective(malarkey) {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
        model: '=ngModel'
    },
    template: '&nbsp;',
    link: linkFunc
  };

  return directive;

  function linkFunc(scope, el) {
    let watcher;
    let typist = malarkey(el[0], {
      typeSpeed: 40,
      deleteSpeed: 40,
      pauseDelay: 800,
      loop: true,
      postfix: ' '
    });

    el.addClass('acme-malarkey');

    angular.forEach(scope.model, (value) => {
      typist.type(value).pause().delete();
    });

    scope.$on('$destroy', () => {
      watcher();
    });
  }

}
