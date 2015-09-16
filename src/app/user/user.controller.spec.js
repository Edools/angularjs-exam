describe('User Controller', function () {

    beforeEach(angular.mock.module('edoolsGithub'));

    let userCtrl;

    beforeEach(()=>{
        userCtrl = new UserCtrl();
    });

    it('vou escrever o certo depois', ()=>{
        expect(userCtrl.requestUsers()).toEqual([]);
    });
});