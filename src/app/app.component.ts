import { Component } from '@angular/core';
// decorator
@Component({
  selector: 'app-root', // exposed in selector
  templateUrl: './app.component.html',//html
  styleUrls: ['./app.component.css'] //css
})

export class AppComponent {
  //ts
  title = 'lnt-ph-book-sep2020';
}
