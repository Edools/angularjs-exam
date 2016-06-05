export function IssueListDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/issueList/issueList.html',
    scope: {
      onItemSelected: '&?',
      issues: '=?'
    },
    controller: IssueListController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class IssueListController {
  constructor(moment) {
    'ngInject';
    this.moment = moment;
  }

  itemSelected(item) {
    if (angular.isFunction(this.onItemSelected)) {
      this.onItemSelected({
        issue: item
      });
    }
  }

  getUpdatedDate(issue){
    return this.moment(issue.updated_at).format('MMM Do YY');
  }
}
