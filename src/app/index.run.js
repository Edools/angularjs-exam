export function runBlock($log, $window, $document, FastClick) {
  'ngInject';
  $log.debug('runBlock end');

  $window.onload = () => {
    FastClick.attach($document[0].body);
  };
}
