import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCardsComponent } from './character-cards/character-cards.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterService } from './service/character.service';
import { BuyCarouselComponent } from './buy-carousel/buy-carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { BuyComponent } from './buy/buy.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardsComponent,
    CharacterListComponent,
    CreateCharacterComponent,
    BuyCarouselComponent,
    NavbarComponent,
    AboutComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
