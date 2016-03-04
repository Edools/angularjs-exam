export class MainController {
  constructor (toastr, GithubService) {
    'ngInject';

    this.toastr = toastr;
    this.GithubService = GithubService;

  }

  search() {
	let self = this;
	this.GithubService.findRepositoriesByName(this.searchQuery).then(
		(res) => {
			self.repositories = res.data.items;
		}
	).catch(
		(res) => {
			self.toastr.error(res.data.message);
		}
	)
  }

}
