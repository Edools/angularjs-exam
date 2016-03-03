export default class HomeController {

  constructor(elasticGit, $location) {
  	this.$location = $location;
    this.elasticGit = elasticGit;
    elasticGit.getRepos().then(result => {this.repos = result.data; this.successApiCall = "Ok";});
  }

  loadCommit(repo, loadMore) {

  	let page = 0;
  	let repoId;
  	
  	//counter increment todo load more
  	page++;

  	//check if click become of repo list or load more button
	if(!loadMore) {

		this.repoId = repoId = repo.id;

	  	//populate name
	  	this.name = repo.name;

	  	//populate forks
	  	this.forks = repo.forks_count;

	  	//populate stars
	  	this.stars = repo.stargazers_count;
	}
	else
		repoId = this.repoId;

  	//commit url with pagination
	let commit_url = "https://api.github.com/repositories/" + repoId + "/commits?page="+page+"&per_page=20&"+this.secret_token;

	this.elasticGit.getCommit(commit_url).then(result => {
		if(loadMore) {
			this.commit.push.apply(this.commit, result.data);
		}
		else
			this.commit = result.data;
	});

  }

}

HomeController.$inject = ['elasticGit', '$location'];
