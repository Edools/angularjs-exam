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
  constructor($rootScope, $scope, $state, config, AuthService) {
    'ngInject';

    let self = this;

    self.$rootScope = $rootScope;
    self.$scope = $scope;
    self.$state = $state;
    self.AuthService = AuthService;
    self.loginUrl = config.GITHUB_AUTH_URL +
      '?client_id=' + config.GITHUB_CLIENT_ID +
      '&scope=public_repo';

    self.isAuthenticated = AuthService.isAuthenticated;

    let onLogout = $rootScope.$on('auth.logout', () => {
      self.isAuthenticated = AuthService.isAuthenticated;
    });

    let onLogin = $rootScope.$on('auth.login', () => {
      self.isAuthenticated = AuthService.isAuthenticated;
    });

    $rootScope.$on('$destroy', onLogin);
    $rootScope.$on('$destroy', onLogout);

    self.AuthService.getMe()
      .then((res) => {
        self.me = res.data;
      });

    if ($state.params.text)
      self.searchText = $state.params.text;
  }

  search() {
    let self = this;
    self.$rootScope.$broadcast('search', self.searchText);
    self.$state.go('home', {
      text: self.searchText,
      page: 1
    })
  }

  logout() {
    this.AuthService.logout();
  }
}
