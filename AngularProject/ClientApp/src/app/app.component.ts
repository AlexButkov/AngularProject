import { AccountManagerService } from './services/account-manager.service';
import { Component, OnInit } from '@angular/core';
import { LoadingTemplateService } from './services/loading-template.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    public loading: LoadingTemplateService,
    private account: AccountManagerService
  ) { }

  ngOnInit() {
    this.account.userCheck();
  }
}
