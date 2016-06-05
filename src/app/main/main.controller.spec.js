describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('app.main'));

  beforeEach(inject(($controller, toastr) => {
    spyOn(toastr, 'info').and.callThrough();

    vm = $controller('MainController');
  }));

  it('should be compiled', () => {
    expect(vm).not.toEqual(null);
  });

});
