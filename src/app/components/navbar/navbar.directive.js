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

    if ($state.params.text)
      this.searchText = $state.params.text;
  }

  search() {
    let self = this;
    self.$rootScope.$broadcast('search', self.searchText);
    self.$state.go('home', {
      text: self.searchText,
      page: 1
    })
  }
}
