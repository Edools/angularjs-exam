describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('app.repository'));

  beforeEach(inject(($controller, toastr) => {
    spyOn(toastr, 'info').and.callThrough();

    vm = $controller('RepositoryController');
  }));

  it('should be compiled', () => {
    expect(vm).not.toEqual(null);
  });

});
