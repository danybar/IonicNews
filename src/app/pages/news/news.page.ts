import { Component, OnInit } from '@angular/core';
import { LoadingController} from '@ionic/angular';
import { NewService } from 'src/app/services/new.service';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})


export class NewsPage implements OnInit {

  news : any [] = [];
  favorite : any [] = [];


  constructor(private newService: NewService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    SplashScreen.show({
      showDuration: 3000,
      autoHide: true,
    });
   this.loadNews();
  }

  async loadNews(){

    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    })

    await loading.present();

    this.newService.getTopRatedNews().subscribe((res) => {
      loading.dismiss();
      this.news = [...this.news, ...res.articles];
    });
  }

  onSearchChange(inputEvent: any){
    
    this.news = [];

    let find = inputEvent.detail.value

    if (typeof find === "string" && find.trim().length == 0) {
      this.loadNews();
      return
   }

    this.newService.findNews(find).subscribe(res =>{
      this.news = [...this.news, ...res.articles];
    })
  }

  async saveData(title: string, url: string, img: string) {
    
    if(localStorage.getItem("favorite") == null){
      this.favorite = [];
      localStorage.setItem("favorite", JSON.stringify(this.favorite));
    }

    this.favorite = JSON.parse(localStorage.getItem("favorite") || '[]');

    this.favorite.push({title, url, img});
    localStorage.setItem("favorite", JSON.stringify(this.favorite));

    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    })

    await loading.present();

    loading.dismiss();
 
  }

}
