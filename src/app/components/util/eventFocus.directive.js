export function EventFocusDirective($timeout, $window) {
  'ngInject';

  let directive = {
    restrict: 'A',
    link: link
  };

  return directive;

  function link(scope, elem, attr) {
    'ngInject';

    elem.on(attr.eventFocus, () => {
      $timeout(function () {
        let element = $window.document.getElementById(attr.eventFocusId);
        let focusClassElement = $window.document.getElementById(attr.eventClassFocusId) || element;

        if (element) {
          element.focus();
          focusClassElement.className += ' focused';

          element.onblur = () => {
            focusClassElement.className = focusClassElement.className.replace('\ focused', '');
          }
        }
      });
    });

    scope.$on('$destroy', () => {
      elem.off(attr.eventFocus);
    });
  }
}
