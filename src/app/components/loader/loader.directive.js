export function LoaderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/loader/loader.html',
    scope: {
    },
    controller: LoaderController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class LoaderController {
  constructor() {
    'ngInject';
  }
}
