import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { UpgradesListComponent } from './upgrades-list/upgrades-list.component';
import { CookieClickerService } from './cookie-clicker.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StoreComponent,
    AboutComponent,
    HomeContainerComponent,
    UpgradesListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CookieClickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
