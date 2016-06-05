describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('app.issue'));

  beforeEach(inject(($controller, toastr) => {
    spyOn(toastr, 'info').and.callThrough();

    vm = $controller('IssueController');
  }));

  it('should be compiled', () => {
    expect(vm).not.toEqual(null);
  });

});
