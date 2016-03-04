export class RepositoryController {
	constructor ($http, $state, $rootScope, GithubService, toastr) {
		'ngInject';
	
		this.$http = $http;
		this.GithubService = GithubService;
		this.$state = $state;
		this.toastr = toastr;
	
		this.getGeneralData();
		this.getIssues();

		if ($state.params.number)
			this.getComments();
			
		let self = this;

		$rootScope.$on('$destroy', 
			$rootScope.$on("$stateChangeSuccess", function(event, toState, toParams){
				self.getComments(toParams.number);
			})
		);

	}
  
	getGeneralData() {
		let self = this;
		this.GithubService.findRepositoryByName(this.$state.params.owner, this.$state.params.name).then(
			(res) => {
				self.data = res.data;
			}
		).catch(
			(res) => {
				self.toastr.error(res.data.message);
			}
		)
	}

	getIssues() {
		let self = this;
		this.GithubService.findIssuesByRepository(this.$state.params.owner, this.$state.params.name).then(
			(res) => {
				self.issues = res.data;
			}
		).catch(
			(res) => {
				self.toastr.error(res.data.message);
			}
		)
	}
	
	getComments() {
		let self = this;
		
		if (!this.$state.params.number)
			return;

		this.GithubService.findIssueByNumber(this.$state.params.owner, this.$state.params.name, this.$state.params.number).then(
			(res) => {
				self.issue = res.data;
			}
		).catch(
			(res) => {
				self.toastr.error(res.data.message);
			}
		)

		this.GithubService.findCommentsByIssue(this.$state.params.owner, this.$state.params.name, this.$state.params.number).then(
			(res) => {
				self.comments = res.data;
			}
		).catch(
			(res) => {
				self.toastr.error(res.data.message);
			}
		)

	}

	closeModal() {
		let self = this;
		self.issue = [];
		self.comments = [];
		this.$state.go('repository', {
			owner: this.$state.params.owner,
			repository: this.$state.params.repository
		});
	}

}
