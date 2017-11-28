import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header class="mb-3">o</header>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  title = 'app';
}
