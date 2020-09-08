import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
    .greenText
    {
      color: green;
    }
    `
  ]
})
export class ConceptsComponent implements OnInit {
// string intrpolation related
 appName = 'Phone Book App!';

 // property binding
 compname = 'LNT';
 // 2 way binding
courseName = 'Angular';

isloggedin = true;

profilename;

skillslist: string[] = ['html', 'css', 'ts'];
  constructor() { }

  ngOnInit(): void {
  }
getExp(): number{
  return 20;
}
// event binding
click(evt): void{
  console.log(evt);
  alert('clicked');
}
profile(evt): void{
  // alert('handle ' + evt);
  this.profilename = evt;
}
}
