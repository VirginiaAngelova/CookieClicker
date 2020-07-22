import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent} from './home-container/home-container.component'
import { StoreComponent } from './store/store.component'
import { AboutComponent } from './about/about.component';

const routes: Routes = [{
  path: "",
  component: HomeContainerComponent
},
{
  path: "store",
  component: StoreComponent
},
{
  path: "about",
  component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
