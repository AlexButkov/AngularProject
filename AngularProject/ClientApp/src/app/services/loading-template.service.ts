import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingTemplateService {

  isActive  = true;

  constructor(
  ) { }

  turnOn() {
    this.isActive = true;
  }

  turnOff() {
    this.isActive = false;
  }
}
