export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {

    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor ($rootScope) {
    'ngInject';

    this.$rootScope = $rootScope;
  }

  search(name) {
    this.$rootScope.$broadcast('search', name);
  }
}
