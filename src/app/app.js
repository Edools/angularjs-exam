import angular from 'angular';
import * as UserModule from './user/user.module';


angular.module('edoolsGithub',[])
.factory('userSvc', UserModule.svc)
.controller('userCtrl', UserModule.ctrl);
