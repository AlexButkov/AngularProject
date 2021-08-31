import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountManagerService } from '../services/account-manager.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  forecasts: WeatherForecast[];

  constructor(
    private http: HttpClient,
    private account: AccountManagerService,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  async ngOnInit() {
    if (!this.account.isSignedIn) {
      await this.account.navigateToLoginUrl();
    } else {
      await this.getForecasts();
    }
  }

  private async getForecasts() {
    try {
      this.forecasts = await this.http.get<WeatherForecast[]>(`${this.baseUrl}weatherforecast`).toPromise();
    } catch (e) {
      console.error(e);
    }
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
