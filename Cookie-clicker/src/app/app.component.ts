import { Component } from '@angular/core';
import { CookieClickerService } from './cookie-clicker.service';
import { TimeBoost } from './TimeBoost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public defaultIntervalId: any;

  constructor(private cookieClickerService: CookieClickerService) { }

  ngOnInit() {
    let deafutInterval = 10000;

    this.cookieClickerService.getTimeBoost().subscribe(timeboosts => {
      deafutInterval = 10000 - (1000*(timeboosts.length * TimeBoost.timeBonus));
      clearInterval(this.defaultIntervalId);
      this.startDefaultInterval(deafutInterval);
    });

    this.startDefaultInterval(deafutInterval);

    setInterval(() => {
      this.cookieClickerService.incrementCookiesGrandmaBonus();
    }, 5000);

    setInterval(() => {
      this.cookieClickerService.incrementCookiesFarmBonus();
    }, 10000);

    setInterval(() => {
      this.cookieClickerService.incrementCookiesMineBonus();
    }, 10000);
  }

  startDefaultInterval(deafutInterval: number) {
    this.defaultIntervalId = setInterval(() => {
      this.cookieClickerService.incrementCookiesForTimer();
    }, deafutInterval);
  }

}
