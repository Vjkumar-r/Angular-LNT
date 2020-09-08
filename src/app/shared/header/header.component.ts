import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 // ts
 accountName: string;
 // can subscribe from account data service
 // 4.any to any comp - prev step is in account service
  constructor(private accountDataService: AccountService) { }

  ngOnInit(): void {
    this.accountDataService.latestAccountName.subscribe((name: any) => {
    console.log(name);
    this.accountName = name;
    });
  }

}
