import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieClickerService } from '../cookie-clicker.service';
import { Cursor } from '../Cursor'
import { Grandma } from '../Grandma';
import { Farm } from '../Farm';
import { Mine } from '../Mine';
import { TimeBoost } from '../TimeBoost';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})

export class StoreComponent implements OnInit, OnDestroy {
  public configGame = this.cookieClickerService.configGame;

  public titleCursor: string = Cursor.title;
  public cursorPrice: number = Cursor.price;

  public titleGrandma: string = Grandma.title;
  public grandmaPrice: number = Grandma.price;

  public titleFarm: string = Farm.title;
  public farmPrice: number = Farm.price;

  public titleMine: string = Mine.title;
  public minePrice: number = Mine.price;

  public titleTimeBoost: string = TimeBoost.title;
  public timeBoostPrice: number = TimeBoost.price;

  public disabledCursorPurchase = false;
  public disabledGrandmaPurchase = false;
  public disabledFarmPurchase = false;
  public disabledMinePurchase = false;
  public disabledTimeBoostPurchase = false;

  private cursorObsSubscription: Subscription;
  private grandmaObsSubscription: Subscription;
  private farmObsSubscription: Subscription;
  private mineObsSubscription: Subscription;
  private timeBoostObsSubscription: Subscription;

  constructor(private cookieClickerService: CookieClickerService) { }

  ngOnInit() {
    this.cursorObsSubscription = this.cookieClickerService
      .getCursor()
      .subscribe(cursors => {
        this.disabledCursorPurchase = !this.cookieClickerService.canBuyCursor();
      })

    this.grandmaObsSubscription = this.cookieClickerService
      .getGrandma()
      .subscribe(grandmas => {
        this.disabledGrandmaPurchase = !this.cookieClickerService.canBuyGrandma();
      })

    this.farmObsSubscription = this.cookieClickerService
      .getFarm()
      .subscribe(farms => {
        this.disabledFarmPurchase = !this.cookieClickerService.canBuyFarm();
      })

    this.mineObsSubscription = this.cookieClickerService
      .getMine()
      .subscribe(mines => {
        this.disabledMinePurchase = !this.cookieClickerService.canBuyMine();
      })

    this.timeBoostObsSubscription = this.cookieClickerService
      .getTimeBoost()
      .subscribe(timeboosts => {
        this.disabledTimeBoostPurchase = !this.cookieClickerService.canBuyTimeBoost();
      })

    this.disabledCursorPurchase = true;
    this.disabledGrandmaPurchase = true;
    this.disabledFarmPurchase = true;
    this.disabledMinePurchase = true;
    this.disabledTimeBoostPurchase = true;

    this.cookieClickerService.refreshUpgrades();
  }

  public buyCursorUpgrades() {
    this.cookieClickerService.buyCursorUpgrades();
  }

  public buyGrandmaUpgrades() {
    this.cookieClickerService.buyGrandmaUpgrades();
  }

  public buyFarmUpgrades() {
    this.cookieClickerService.buyFarmUpgrades();
  }

  public buyMineUpgrades() {
    this.cookieClickerService.buyMineUpgrades();
  }

  public buyTimeBoostUpgrades() {
    this.cookieClickerService.buyTimeBoostUpgrades();
  }

  ngOnDestroy(): void {
    this.cursorObsSubscription.unsubscribe();
    this.grandmaObsSubscription.unsubscribe();
    this.mineObsSubscription.unsubscribe();
    this.farmObsSubscription.unsubscribe();
    this.timeBoostObsSubscription.unsubscribe();
  }

}


