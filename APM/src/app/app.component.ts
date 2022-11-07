import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div style="text-align:center">
    <h1>
      {{pageTitle}}
    </h1>
    ... Starter Files ...
</div>

  `
})
export class AppComponent {
  pageTitle: string = "Welcome to Nitzan's website"
}
