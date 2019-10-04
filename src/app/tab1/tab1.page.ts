import { Component } from '@angular/core';
import { ChuckNorrisService } from '../chuck-norris.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  icon: string;
  joke: string;
  loading:any;

  constructor( public chuck: ChuckNorrisService, public loadingCtrl: LoadingController) {
    this.newJoke();
  }

  newJoke(){
    this.presentLoading();
    this.chuck.getJoke().subscribe( data => {
      this.icon = data.icon_url;
      this.joke = data.value;
      this.loading.dismiss(); // dismiss after loading the data
    });
  }

  // Loading Controllers are useful for getting data from an API
  async presentLoading(){
    this.loading  = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await this.loading.present();
  }

}
