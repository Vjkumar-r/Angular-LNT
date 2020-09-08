import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {
 // 1. create custom property
  @Input() age = 25; // @input() makes custom property
  constructor() { }

  ngOnInit(): void {
  }

}
