import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieClickerService } from '../cookie-clicker.service';
import { Cursor } from '../Cursor';
import { Grandma } from '../Grandma';
import { Farm } from '../Farm';
import { Mine } from '../Mine';
import { TimeBoost } from '../TimeBoost';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upgrades-list',
  templateUrl: './upgrades-list.component.html',
  styleUrls: ['./upgrades-list.component.scss']
})

export class UpgradesListComponent implements OnInit, OnDestroy {

  public titleCursor: string = Cursor.title;
  public bonusCursor: number = 0;

  public titleGrandma: string = Grandma.title;
  public bonusGrandma: number = 0;

  public titleFarm: string = Farm.title;
  public bonusFarm: number = 0;

  public titleMine: string = Mine.title;
  public bonusMine: number = 0;

  public titleTimeBoost: string = TimeBoost.title;
  public bonusTimeBoost: number = TimeBoost.timeBonus;

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
        this.bonusCursor = cursors.length * Cursor.bonus;
      });

    this.grandmaObsSubscription = this.cookieClickerService
      .getGrandma()
      .subscribe(grandmathers => {
        this.bonusGrandma = grandmathers.length * Grandma.bonus;
      })

    this.farmObsSubscription = this.cookieClickerService
      .getFarm()
      .subscribe(farms => {
        this.bonusFarm = farms.length * Farm.bonus;
      })

    this.mineObsSubscription = this.cookieClickerService
      .getMine()
      .subscribe(mines => {
        this.bonusMine = mines.length * Mine.bonus;
      })

    this.timeBoostObsSubscription = this.cookieClickerService
      .getTimeBoost()
      .subscribe(timeboosts => {
        if (timeboosts.length <= 9) {
          this.bonusTimeBoost = timeboosts.length * TimeBoost.timeBonus;
        }
      })
    this.cookieClickerService.refreshUpgrades();
  }

  ngOnDestroy(): void {
    this.cursorObsSubscription.unsubscribe();
    this.grandmaObsSubscription.unsubscribe();
    this.farmObsSubscription.unsubscribe();
    this.mineObsSubscription.unsubscribe();
    this.timeBoostObsSubscription.unsubscribe();
  }

}
