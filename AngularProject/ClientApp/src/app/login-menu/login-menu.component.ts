import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {
  public isAuthenticated: boolean;
  public userName: string;

  constructor() { }

  ngOnInit() {
    this.isAuthenticated = false;//todo
    this.userName = '';//todo
  }
}
