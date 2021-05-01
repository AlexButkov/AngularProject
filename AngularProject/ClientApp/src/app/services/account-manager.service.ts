import { LoadingTemplateService } from './loading-template.service';
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
    private loading: LoadingTemplateService,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  async userCheck(): Promise<void> {
    this.loading.turnOn();

    let result: LoginResult;
    try {
      result = await this.http.get<LoginResult>(`${this.baseUrl}account/user`).toPromise();
    } catch (e) {
      console.error(e);
    }

    if (!result || result.error) {
      this.loading.turnOff();
      return;
    }

    this.isSignedIn = true;
    this.userName = result.userName;

    this.loading.turnOff();
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
    this.loading.turnOn();

    let result: LoginResult;
    try {
      result = await this.http.get<LoginResult>(`${this.baseUrl}account/login?user=${selectedUser}`).toPromise();
    } catch (e) {
      console.error(e);
    }

    if (!result) {
      this.loading.turnOff();
      return;
    }

    if (result.error) {
      window.alert(result.error);
      this.loading.turnOff();
      return;
    }

    this.isSignedIn = true;
    this.userName = result.userName;

    this.loading.turnOff();
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

    if (!result) {
      return;
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
