angular.module('githubList')

.service('mainService', function($http, $q) {
	const GITHUB_USER = 'wevernek'
	const GITHUB_URL_DATA = 'https://api.github.com/users'
	const GITHUB_URL_REPOS = 'https://api.github.com/users/wevernek/repos'

	this.getDataGithub = () => {
		return $http({
			method: 'GET',
			url: `${GITHUB_URL_DATA}/${GITHUB_USER}`
		})
	}

	this.getReposGithub = () => {
		return $http({
			method: 'GET',
			url: `${GITHUB_URL_REPOS}`
		})
	}
})