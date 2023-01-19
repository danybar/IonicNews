import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';
import { from } from 'rxjs';
import { NewService } from 'src/app/services/new.service';


@Component({
  selector: 'app-favorite-news',
  templateUrl: './favorite-news.page.html',
  styleUrls: ['./favorite-news.page.scss'],
})
export class FavoriteNewsPage implements OnInit {

  favorite : any [] = [];

  constructor(private loadingCtrl: LoadingController, private newService: NewService) { }

  ngOnInit() {
    }

   async ionViewDidEnter(){

      const loading = await this.loadingCtrl.create({
        message: 'Loading..',
        spinner: 'bubbles',
      })

      await loading.present();

      from(Array(JSON.parse(localStorage.getItem("favorite") || '[]'))).subscribe({next:(value:any)=>{
        loading.dismiss();
        this.favorite = value;
      }})
    }

    async clearLocal() {
      
      const loading = await this.loadingCtrl.create({
        message: 'Loading..',
        spinner: 'bubbles',
      })

      await loading.present();
      localStorage.clear();

      from(Array(JSON.parse(localStorage.getItem("favorite") || '[]'))).subscribe({next:(value:any)=>{
        loading.dismiss();
        this.favorite = value;
      }})
      
      return false;
  }

}
