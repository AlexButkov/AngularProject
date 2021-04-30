import { Component, OnInit } from '@angular/core';
import { AccountManagerService } from '../services/account-manager.service';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {

  constructor(
    private account: AccountManagerService
  ) { }

  ngOnInit() {
  }
}
