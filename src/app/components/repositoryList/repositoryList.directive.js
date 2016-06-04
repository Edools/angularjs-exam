export function RepositoryListDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/repositoryList/repositoryList.html',
    scope: {
      onItemSelected: '&?',
      repositories: '=?'
    },
    controller: RepositoryListController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class RepositoryListController {
  constructor(moment) {
    'ngInject';
    this.moment = moment;
  }

  itemSelected(item) {
    if (angular.isFunction(this.onItemSelected)) {
      this.onItemSelected({
        repository: item
      });
    }
  }

  getUpdatedDate(repository){
    return this.moment(repository.updated_at).format('MMM Do YY');
  }
}
