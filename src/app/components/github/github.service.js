export class GithubService {
	constructor($http) {
		'ngInject';

		this.$http = $http;
	}
	
	findRepositoriesByName(query) {
		return this.$http ({
			method: 'GET',
			url: 'https://api.github.com/search/repositories',
			params: {
				q: query
			}
		}).then((res) => {
			return res
		});
	}

	findRepositoryByName(owner, name) {
		return this.$http.get(`https://api.github.com/repos/${owner}/${name}`);
	}

	findIssuesByRepository(owner, name) {
		return this.$http.get(`https://api.github.com/repos/${owner}/${name}/issues`);
	}

	findIssueByNumber(owner, name, number) {
		return this.$http.get(`https://api.github.com/repos/${owner}/${name}/issues/${number}`);
	}
	
	findCommentsByIssue(owner, name, number) {
		return this.$http.get(`https://api.github.com/repos/${owner}/${name}/issues/${number}/comments`);
	}

}