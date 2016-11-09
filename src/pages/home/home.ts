import { Component } from '@angular/core';
import { NavController,Events } from 'ionic-angular';
import { BasicInfo } from '../basic-info/basic-info';


@Component({
  
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,public events: Events) {

  events.publish('navBarTitle:changed', 'CGI P&C Insurance');

  }

  openAutoBasicInfo(){
    console.log("Opening auto basic info page");
     this.navCtrl.push(BasicInfo);
    // this.navCtrl.setRoot(BasicInfo);
  }


}
