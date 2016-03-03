export default class HomeController {
  constructor(elasticGit) {
    this.elasticGit = elasticGit;
    elasticGit.getRepos().then(result => {this.repos = result.data; this.successApiCall = "Ok";});
  }

  loadCommit(repo) {
  	//this.elasticGit.getCommit(repo);

  	let page = 0;
  	
  	//counter increment todo load more
  	page++;

  	//populate name
  	this.name = repo.name;

  	//populate forks
  	this.forks = repo.forks_count;

  	//populate stars
  	this.stars = repo.stargazers_count;

  	//commit url with pagination
	let commit_url = "https://api.github.com/repositories/" + repo.id + "/commits?page="+page+"&per_page=20&"+this.secret_token;

	this.elasticGit.getCommit(commit_url).then(result => {
		this.commit = result.data;
	});

  }

}

HomeController.$inject = ['elasticGit'];
