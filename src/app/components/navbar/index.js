/* global moment:false */
import { NavbarDirective } from './navbar.directive';

export default angular
  .module('app.components.navbar', [])
  .constant('moment', moment)
  .directive('acmeNavbar', NavbarDirective);
