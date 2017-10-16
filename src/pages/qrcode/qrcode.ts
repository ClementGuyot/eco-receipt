import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage implements OnInit{

  elementType : 'url';
  qrCodeValue : string = 'https://www.google.fr/search?q=';

  constructor(private userProvider : UserProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * Implementation of OnInit Interface, generate QRCode
   */
  ngOnInit() {
    this.userProvider.getConnectedUser().then(
      user => this.qrCodeValue = this.qrCodeValue + user.userName
    ).catch()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }

}
