'use strict';

class UserCtrl {
	constructor(userSvc) {
		this.userSvc = userSvc;
        this.userName = "Edools";
        this.requestUsers();

    }

    requestUsers(){
    	this.userSvc.getUsers(this.userName).then(users => {
            	this.users = users;
            	console.log(users);
            });

        this.requestRepos();
    }

    requestRepos(){
        this.userSvc.getRepos(this.userName).then(repos => {
            this.repos = repos;
            console.log(repos);
        });
    }

    requestContributors(userName,reporName){
        this.userSvc.getContributors(userName,reporName).then(contrib => {
            this.contrib = contrib;
            console.log(contrib);
        });
    }
}

UserCtrl.$inject = ['userSvc'];

export { UserCtrl }