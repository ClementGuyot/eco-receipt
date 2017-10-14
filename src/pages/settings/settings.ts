import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {UserComponent} from "../../entities/user.model";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  user:UserComponent =  { "mail": "", "userName": "NonConnecté",password:""};

  constructor(private userProvider : UserProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  getConnectedUser(): void {

    this.userProvider.getUser("laurent","laurent").then(
      user => this.user = user
    )

  }
}
