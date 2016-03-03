export class AuthService {
  constructor($rootScope, $window, $http, config, localStorageService) {
    'ngInject';

    let self = this;

    self.$window = $window;
    self.$rootScope = $rootScope;
    self.$http = $http;
    self.localStorageService = localStorageService;
    self.config = config;

    let token = localStorageService.get('token');

    self.isAuthenticated = token != null && token != undefined;
    self.token = token;
  }

  login() {
    let token = this.localStorageService.get('token') || this.getParam('token');

    if (token.length <= 0) {
      this.logout();
      return;
    }

    this.localStorageService.set('token', token);

    this.token = token;
    this.isAuthenticated = true;
    this.$rootScope.$broadcast('auth.login');
  }

  logout() {
    this.localStorageService.remove('token');
    this.token = null;
    this.isAuthenticated = false;
    this.$rootScope.$broadcast('auth.logout');
  }

  getMe() {
    return this.$http.get(this.config.GITHUB_API_URL + '/user');
  }

  getParam(key) {
    return decodeURI(this.$window.location.search.replace(new RegExp("^(?:.*[&\\?]" + decodeURI(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }
}
