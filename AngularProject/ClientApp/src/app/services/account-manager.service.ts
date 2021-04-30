import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountManagerService {

  isSignedIn: boolean;
  userName: string;

  private returnUrl = '/';

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject('BASE_URL') private baseUrl: string
  )
  {
    this.userCheck();
  }

  async userCheck(): Promise<void> {
    let result: LoginResult;

    try {
      result = await this.http.get<LoginResult>(`${this.baseUrl}account/user`).toPromise();
    } catch (e) {
      console.error(e);
    }

    if (result.error) {
      return;
    }

    this.isSignedIn = true;
    this.userName = result.userName;
  }

  async getDemoUsers(): Promise<string[]> {
    let result: string[];

    try {
      result = await this.http.get<string[]>(`${this.baseUrl}account/demo`).toPromise();
    } catch (e) {
      console.error(e);
    }
    return result;
  }

  async logIn(selectedUser: string, isRedirected: boolean = true): Promise<void> {
    let result: LoginResult;

    try {
      result = await this.http.get<LoginResult>(`${this.baseUrl}account/login?user=${selectedUser}&returnUrl=${this.returnUrl}`).toPromise();
    } catch (e) {
      console.error(e);
    }

    if (result.error) {
      window.alert(result.error);
      return;
    }

    this.isSignedIn = true;
    this.userName = result.userName;

    if (isRedirected) {
      await this.navigateToReturnUrl();
    }
  }

  async logOut(): Promise<void> {
    let result: BaseResult;

    try {
      result = await this.http.get<BaseResult>(`${this.baseUrl}account/logout`).toPromise();
    } catch (e) {
      console.error(e);
    }

    if (result.error) {
      window.alert(result.error);
      return;
    }

    this.isSignedIn = false;
    this.userName = null;

    await this.navigateToReturnUrl();
  }

  private async navigateToReturnUrl() {
    await this.router.navigateByUrl(this.returnUrl, {
      replaceUrl: true
    });
  }
}

export interface BaseResult {
  error: string;
}

interface LoginResult extends BaseResult {
  userName: string;
}
