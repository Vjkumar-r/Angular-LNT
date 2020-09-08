import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div>
      <hr>
      <p class="redtext">footer works!</p>
      <app-menu>
      <li class="nav-item">
        <a class="nav-link" href="#">Back to Top</a>
    </li>
      </app-menu>
</div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
