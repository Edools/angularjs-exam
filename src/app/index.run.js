export function runBlock($window,
                         $document,
                         AuthService,
                         FastClick) {
  'ngInject';

  $window.onload = () => {
    FastClick.attach($document[0].body);
  };

  AuthService.login();
}
