(function() {
    'use strict';

    angular
        .module('testeFrontEnd')
        .controller('RepositoryController', RepositoryController);

    /** @ngInject */
    function RepositoryController($timeout, githubRepos, $routeParams, base64) {

        var vm = this;

        vm.repository = null;
        vm.owner = $routeParams.owner;
        vm.repositoryName = $routeParams.name;
        vm.fullname = vm.owner + "/" + vm.repositoryName;

        vm.getGithubRepository = getGithubRepository;
        vm.getGitHubReadMe = getGitHubReadMe;
        vm.getGitHubIssues = getGitHubIssues;
        vm.getIssueLabelClass = getIssueLabelClass;

        init();

        ///////


        function init() {
            getGithubRepository();
        }

        function getGithubRepository() {
            githubRepos.getRepository(vm.fullname).then(function(response) {
                vm.repository = response;
                getGitHubReadMe();
                getGitHubIssues();
            });
        }

        function getGitHubReadMe() {
            return githubRepos.getRepositoryReadme(vm.fullname).then(function(response) {
                vm.repository.readmeContent = base64.decode(response.content);
            });
        }

        function getGitHubIssues() {
            return githubRepos.getRepositoryIssues(vm.fullname).then(function(response) {
                vm.repository.issues = response;
            });
        }

        function getIssueLabelClass(stateIssue) {
            if (stateIssue === "open") {
                return "label-success";
            } else {
                return "label-default";
            }
        }
    }
})();