export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {},
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor($rootScope, $state) {
    'ngInject';

    this.$rootScope = $rootScope;
    this.$state = $state;

  }

  search(name) {
    let self = this;
    self.$rootScope.$broadcast('search', name);
    self.$state.go('home', {
      text: self.name,
      page: 1
    })
  }
}
