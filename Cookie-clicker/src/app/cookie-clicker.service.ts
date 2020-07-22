import { Injectable } from '@angular/core';
import { ConfigGame } from './configGame'
import { Cursor } from './Cursor'
import { Farm } from './Farm';
import { Observable, Subject } from 'rxjs';
import { Grandma } from './Grandma';
import { Mine } from './Mine';
import { TimeBoost } from './TimeBoost';

@Injectable({
  providedIn: 'root'
})

export class CookieClickerService {

  constructor() { }

  public configGame: ConfigGame = new ConfigGame();

  public isShown: boolean = false;

  public bonusCursor: number = 0;
  public bonusGrandma: number = 0;
  public bonusFarm: number = 0;
  public bonusMine: number = 0;

  private cookiesSubject = new Subject<number>();
  private cookies$ = this.cookiesSubject.asObservable();

  private cursorSubject = new Subject<Cursor[]>();
  private cursor$ = this.cursorSubject.asObservable();

  private farmSubject = new Subject<Farm[]>();
  private farm$ = this.farmSubject.asObservable();

  private grandmaSubject = new Subject<Grandma[]>();
  private grandma$ = this.grandmaSubject.asObservable();

  private mineSubject = new Subject<Mine[]>();
  private mine$ = this.mineSubject.asObservable();

  private timeBoostSubject = new Subject<TimeBoost[]>();
  private timeBoost$ = this.timeBoostSubject.asObservable();

  public getCookies(): Observable<number> {
    return this.cookies$;
  }

  public getCursor(): Observable<Cursor[]> {
    return this.cursor$;
  }

  public getFarm(): Observable<Farm[]> {
    return this.farm$;
  }

  public getGrandma(): Observable<Grandma[]> {
    return this.grandma$;
  }

  public getMine(): Observable<Mine[]> {
    return this.mine$
  }

  public getTimeBoost(): Observable<TimeBoost[]> {
    return this.timeBoost$;
  }

  public refreshUpgrades() {
    this.cookiesSubject.next(this.configGame.cookies);
    this.cursorSubject.next(this.configGame.upgradeCursor);
    this.grandmaSubject.next(this.configGame.upgradeGrandma);
    this.farmSubject.next(this.configGame.upgradeFarm);
    this.mineSubject.next(this.configGame.upgradeMine);
    this.timeBoostSubject.next(this.configGame.upgradeTimeBoost);
  }

  public incrementCookiesForClick() {
    this.bonusCursor = this.configGame.upgradeCursor.length * Cursor.bonus + 1;
    this.configGame.cookies += this.bonusCursor;
    this.cookiesSubject.next(this.configGame.cookies);
  }
  
  public incrementCookiesForTimer() {
    this.configGame.cookies++;
    this.cookiesSubject.next(this.configGame.cookies);
  }

  public incrementCookiesGrandmaBonus() {
    this.bonusGrandma = this.configGame.upgradeGrandma.length * Grandma.bonus;
    this.configGame.cookies += this.bonusGrandma;
    this.cookiesSubject.next(this.configGame.cookies);
  }

  public incrementCookiesFarmBonus() {
    this.bonusFarm = this.configGame.upgradeFarm.length * Farm.bonus;
    this.configGame.cookies += this.bonusFarm;
    this.cookiesSubject.next(this.configGame.cookies);
  }

  public incrementCookiesMineBonus() {
    this.bonusMine = this.configGame.upgradeMine.length * Mine.bonus;
    this.configGame.cookies += this.bonusMine;
    this.cookiesSubject.next(this.configGame.cookies);
  }

  public canBuyCursor(): Boolean {
    return Cursor.price <= this.configGame.cookies && this.configGame.upgradeCursor.length < 100;
  }

  public canBuyGrandma(): Boolean {
    return Grandma.price <= this.configGame.cookies && this.configGame.upgradeGrandma.length < 100;
  }

  public canBuyFarm(): Boolean {
    return Farm.price <= this.configGame.cookies && this.configGame.upgradeFarm.length < 100;
  }

  public canBuyMine(): Boolean {
    return Mine.price <= this.configGame.cookies && this.configGame.upgradeMine.length < 100;
  }

  public canBuyTimeBoost(): Boolean {
    return TimeBoost.price <= this.configGame.cookies && this.configGame.upgradeTimeBoost.length < 9;
  }

  public buyCursorUpgrades() {
    if (this.canBuyCursor() && this.configGame.cookies > 0) {
      this.configGame.upgradeCursor.push(new Cursor());
      this.cursorSubject.next(this.configGame.upgradeCursor);
      this.configGame.cookies -= Cursor.price;
    }
  }

  public buyGrandmaUpgrades() {
    if (this.canBuyGrandma() && this.configGame.cookies > 0) {
      this.configGame.upgradeGrandma.push(new Grandma());
      this.grandmaSubject.next(this.configGame.upgradeGrandma);
      this.configGame.cookies -= Grandma.price;
    }
  }

  public buyFarmUpgrades() {
    if (this.canBuyFarm() && this.configGame.cookies > 0) {
      this.configGame.upgradeFarm.push(new Farm());
      this.farmSubject.next(this.configGame.upgradeFarm);
      this.configGame.cookies -= Farm.price;
    }
  }

  public buyMineUpgrades() {
    if (this.canBuyMine() && this.configGame.cookies > 0) {
      this.configGame.upgradeMine.push(new Mine());
      this.mineSubject.next(this.configGame.upgradeMine);
      this.configGame.cookies -= Mine.price;
    }
  }

  public buyTimeBoostUpgrades() {
    if (this.canBuyTimeBoost() && this.configGame.cookies > 0) {
      this.configGame.upgradeTimeBoost.push(new TimeBoost());
      this.timeBoostSubject.next(this.configGame.upgradeTimeBoost);
      this.configGame.cookies -= TimeBoost.price;
    }
  }

}