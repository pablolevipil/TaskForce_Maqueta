import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App} from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { IndexPage } from '../index';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild(Nav) nav:Nav;
  public openSearch = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private appCtrl:App) {
  }

  ionViewWillEnter() {
    this.openPage('IndexPage');
  }

  openPage(IndexPage){
    this.nav.setRoot(IndexPage);
  }

  openMenu() {
    this.menuCtrl.open();
  }

  logout(){
    this.appCtrl.getRootNav().setRoot('LoginPage');
  }
}
