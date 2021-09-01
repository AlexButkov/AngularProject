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
    this.users = await this.account.getDemoUsers();
    this.selectedUser = this.users.length ? this.users[0] : '';
  }

  async onClick() {
    let loginResult = await this.account.logIn(this.selectedUser);
    if (loginResult) {
      this.dialogRef.close();
    }
  }
}
