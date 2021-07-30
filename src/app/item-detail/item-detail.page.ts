import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, ToastController } from '@ionic/angular';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage {

  isLoading = true;
  user: any;
  constructor(
    private httpService: HttpService,
    private toastController: ToastController,
    public actionSheetController: ActionSheetController,
    public navController: NavController
  ) {
    this.httpService.getOneUser().subscribe((data: any) => {
      this.user = data.results[0];
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

}
