export default class HomeController {
  constructor(elasticGit) {
    this.elasticGit = elasticGit;
    elasticGit.getRepos().then(result => {this.repos = result.data; this.successApiCall = "Ok";} );
  }

}

HomeController.$inject = ['elasticGit'];
