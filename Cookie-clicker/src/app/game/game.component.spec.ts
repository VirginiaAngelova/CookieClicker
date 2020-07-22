import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CookieClickerService } from '../cookie-clicker.service';
import { GameComponent } from './game.component';
import { observable } from 'rxjs';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title Ginger cookie clicker', () => {
    expect(component.nameGame).toEqual('Ginger cookie clicker');
  });

  it('should have as cookies like number ', () => {
    expect(component.cookies).toEqual(0);
  });

  it('incrementCookies() should not add effect !isAnimated'), () => {
    expect(component.isAnimated).toBe(false);
    component.incrementCookies();
    expect(component.isAnimated).toBe(true)
    component.incrementCookies();
  }

  let cookieService: CookieClickerService;

  it('should service to be injected'),() => {
    let cookieService = fixture.debugElement.injector.get(CookieClickerService);
    fixture.detectChanges();
   // expect(cookieService.getCookies()).toEqual(component.incrementCookies())
  }

});
