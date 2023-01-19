import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteNewsPageRoutingModule } from './favorite-news-routing.module';

import { FavoriteNewsPage } from './favorite-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteNewsPageRoutingModule
  ],
  declarations: [FavoriteNewsPage]
})
export class FavoriteNewsPageModule {}
