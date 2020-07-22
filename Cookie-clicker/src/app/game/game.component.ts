import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieClickerService } from '../cookie-clicker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit, OnDestroy {
  public nameGame: string = "Ginger cookie clicker";
  public cookies: number = 0;
  private cookieObsSubscription: Subscription;
  public isAnimated: boolean = false;

  constructor(
    private cookieClickerService: CookieClickerService
  ) { }

  ngOnInit() {
    this.cookieObsSubscription = this.cookieClickerService
      .getCookies()
      .subscribe(cookies =>
        this.cookies = cookies
      );
  }

  public incrementCookies() {
    this.cookieClickerService.incrementCookiesForClick();
    this.isAnimated = !this.isAnimated;
  }

  ngOnDestroy(): void {
    this.cookieObsSubscription.unsubscribe();
  }

}
