import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteNewsPage } from './favorite-news.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteNewsPageRoutingModule {}
