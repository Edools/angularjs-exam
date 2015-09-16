'use strict';

import { UserCtrl } from './user.controller'
import { UserSvc } from './user.service'

let ctrl = UserCtrl;
let svc = UserSvc.factory; 

export { svc }; 
export { ctrl };



