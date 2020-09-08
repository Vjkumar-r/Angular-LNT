import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {
 // 1. create custom event -- create obj for eventemitter
 @Output() profileLoaded = new EventEmitter();

  constructor() { 
    console.log('Inside constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // this.profileLoaded.emit('Vijay');
  }
  senddatahandler(): void{
    this.profileLoaded.emit('Vijay');
  }

}
