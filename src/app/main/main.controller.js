export class MainController {
  constructor($state) {
    'ngInject';

    this.$state = $state;
    this.repositories = [];
  }

  openRepositoryDetais(repository) {
    this.$state.go('repository', {
      repository: repository.full_name
    });
  }
}
