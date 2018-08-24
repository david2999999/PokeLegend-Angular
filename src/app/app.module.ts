import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokeBagComponent } from './bag/poke-bag/poke-bag.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { BagComponent } from './bag/bag.component';
import { ItemBagComponent } from './bag/item-bag/item-bag.component';
import { BattleItemBagComponent } from './bag/battle-item-bag/battle-item-bag.component';
import { BerryBagComponent } from './bag/berry-bag/berry-bag.component';
import { KeyItemBagComponent } from './bag/key-item-bag/key-item-bag.component';
import { MailBagComponent } from './bag/mail-bag/mail-bag.component';
import { MedicineBagComponent } from './bag/medicine-bag/medicine-bag.component';
import { PokeballBagComponent } from './bag/pokeball-bag/pokeball-bag.component';
import { TmBagComponent } from './bag/tm-bag/tm-bag.component';
import {PokemonPcService} from './shared/services/pokemon-pc.service';
import {PokemonService} from './shared/services/pokemon.service';
import {PlayerService} from './shared/services/player.service';
import { ButtonComponent } from './button/button.component';
import { TopScreenComponent } from './main-screen/top-screen/top-screen.component';
import { BottomScreenComponent } from './main-screen/bottom-screen/bottom-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeBagComponent,
    MainScreenComponent,
    BagComponent,
    ItemBagComponent,
    BattleItemBagComponent,
    BerryBagComponent,
    KeyItemBagComponent,
    MailBagComponent,
    MedicineBagComponent,
    PokeballBagComponent,
    TmBagComponent,
    ButtonComponent,
    TopScreenComponent,
    BottomScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PokemonPcService, PokemonService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
