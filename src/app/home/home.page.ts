import { Component } from '@angular/core';
import {HttpService} from '../service/http.service';
import { NavController, ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isLoading = true;
  users: any;
  constructor(
    private httpService: HttpService,
    private toastController: ToastController,
    public actionSheetController: ActionSheetController,
    public navController: NavController
  ) {
    this.httpService.getUsers().subscribe((data: any) => {
      this.users = data.results;
      this.isLoading = false;
    });
  }

  async liked() {
    const toast = await this.toastController.create({
      message: 'Your have liked an image',
      color: 'success',
      duration: 1000
    });
    toast.present();
  }

  async share() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Share',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Facebook',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Twitter',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Instagram',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Tiktok',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        },
    ]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }

  openProfile() {
    this.navController.navigateForward('profile');
  }

}
