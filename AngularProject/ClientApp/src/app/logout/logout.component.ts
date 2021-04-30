import { Component, OnInit } from '@angular/core';
import { AccountManagerService } from '../services/account-manager.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private account: AccountManagerService
  ) { }

  async ngOnInit() {
    await this.account.logOut();
  }
}
