import { Component, OnInit } from '@angular/core';
import { AccountManagerService } from '../services/account-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users: string[];
  public selectedUser: string;

  constructor(
    private account: AccountManagerService
  ) { }

  async ngOnInit() {
    this.users = await this.account.getDemoUsers();
    this.selectedUser = this.users.length ? this.users[0] : '';
  }

  async onClick() {
    await this.account.logIn(this.selectedUser);
  }
}
