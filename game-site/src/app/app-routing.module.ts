import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyCarouselComponent } from './buy-carousel/buy-carousel.component';
import { AboutComponent } from './about/about.component';
import { BuyComponent } from './buy/buy.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BuyCarouselComponent},
  { path: 'purchase', component: BuyComponent },
  { path: 'about', component: AboutComponent},
  {path: '**', component: BuyCarouselComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
