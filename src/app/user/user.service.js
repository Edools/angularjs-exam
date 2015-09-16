 'use strict';

class UserSvc {
	constructor($http){
		this.$http = $http;
        this.urlUsers = 'https://api.github.com/users/'
        this.urlRepos = 'https://api.github.com/repos/'
	}

	getUsers(userName){
		return this.$http.get(this.urlUsers + userName).then(r => r.data);
	}

    getRepos(userName){
        return this.$http.get(this.urlUsers + userName +'/repos').then(r => r.data);
    }

    getContributors(userName,reporname){
        return this.$http.get(this.urlRepos + userName + '/' + reporname + '/contributors').then(r => r.data);
    }

	static factory($http){
    	return new UserSvc($http);
    }
};

UserSvc.factory.$inject = ['$http'];

export { UserSvc }



