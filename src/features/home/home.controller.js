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
	  		//counter
	  		page = 1;
		  	//populate name
		  	this.name = repo.name;
		  	//populate forks
		  	this.forks = repo.forks_count;
		  	//populate stars
		  	this.stars = repo.stargazers_count;
		  	//show load more button
		  	this.toggleElement('showMore', 'block');
		}
	  	else
	  		repoId = this.repoId;

	  	//commit url with pagination
	  	let commit_url = "https://api.github.com/repositories/" + repoId + "/commits?page="+page+"&per_page=20&"+this.secret_token;

	  	this.elasticGit.getCommit(commit_url).then(result => {
	  		if(loadMore) {
	  			//check data.length to toggle show more button
	  			if(result.data.length) {
	  				this.commit.push.apply(this.commit, result.data);
	  				if(result.data.length < 20)
	  					this.toggleElement('showMore', 'none');
	  			}
	  			else
	  				this.toggleElement('showMore', 'none');
	  		}
	  		else {
	  			this.commit = result.data;
	  			if(result.data.length < 20)
	  				this.toggleElement('showMore', 'none');
	  		}
	  	});
  	}

	toggleElement(id, visibility) {
		document.getElementById(id).style.display = visibility;
	}

}

HomeController.$inject = ['elasticGit', '$location'];
