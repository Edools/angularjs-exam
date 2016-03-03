(function() {

  angular
    .module('AngularGitHub')
    .controller('AppGitHub', AppGitHub);

  AppGitHub.$inject = ['GitHubAPI'];

  function AppGitHub (GitHubAPI) {
    var vm = this;
    vm.username = "";

    vm.isLoad = false;

    vm.fetchRepo = function() {
      vm.isLoad = true;
      GitHubAPI.repos(vm.username)
      .success(function(data, status) {
        vm.repositories = data;
        vm.total_repositoryes = "Repositórios encontrados: " + data.length;
        vm.isLoad = false;
      })
      .error(function(response) {
        console.log(response);
        vm.isLoad = false;
      });
    }
  }
})();
