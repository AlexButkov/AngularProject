import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AccountManagerService } from '../services/account-manager.service';
import { LoadingTemplateService } from '../services/loading-template.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users: string[];
  public selectedUser: string;

  constructor(
    public loading: LoadingTemplateService,
    private account: AccountManagerService,
    private dialogRef: MatDialogRef<LoginComponent>
  ) { }

  async ngOnInit() {
    await this.initUsers();
  }

  async onClick() {
    let loginResult = await this.account.logIn(this.selectedUser);
    if (loginResult) {
      this.dialogRef.close();
    }
  }

  private async initUsers() {
    this.users = await this.account.getDemoUsers();
    this.selectedUser = this.users.length ? this.users[0] : '';
  }
}
