/**
 * Directive responsável por executar função quando o elemento estiver carregado, ex: img
 * @returns {{restrict: string, link: link}}
 * @constructor
 */
export function LoadedDirective() {
  'ngInject';

  let directive = {
    restrict: 'A',
    link: link
  };

  return directive;
}

function link(scope, element, attrs) {
  'ngInject';

  element.bind('load', () => {
    scope.$apply(attrs.loaded);
  });
}
