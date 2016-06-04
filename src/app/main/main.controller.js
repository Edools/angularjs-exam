export class MainController {
  constructor(toastr, $log) {
    'ngInject';

    this.toastr = toastr;
    this.$log = $log;
  }

  openRepositoryDetais(repository){
    this.$log.log(repository.id);
  }

}
