export class MainController {
  constructor($state) {
    'ngInject';

    this.$state = $state;
    this.repositories = [];
  }

  openRepositoryDetais(repository) {
    this.$state.go('repository', {
      fullname: repository.full_name
    });
  }
}
