import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any;
  isLoading = true;
  images = [1,2,3,4,5,6,7,8,9,10];
  constructor(
    private httpService: HttpService,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.httpService.getOneUser().subscribe((data: any) => {
      this.user = data.results[0];
      this.isLoading = false;
    });
  }

  details() {
    this.navController.navigateForward('details');
  }


}
