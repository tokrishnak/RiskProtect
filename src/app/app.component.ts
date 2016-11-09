import { Component,ViewChild } from '@angular/core';
import { Platform,MenuController,Nav,Events } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;
  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;
  navTitle : string = "CGI P&C Insurance";
  constructor(public platform: Platform, public menu: MenuController,public events: Events) {
     this.initializeApp();
      // set our app's pages
    this.pages = [
       { title: 'ContactPage', component: ContactPage },
       { title: 'Home', component: HomePage },
      { title: 'ContactPage', component: ContactPage },
      { title: 'About', component: AboutPage }
    ];

    this.subscribeToNavBarTitleChange();
  }

initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
    
}

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  setNavigationBarTitle(myTitle : string){
    this.navTitle = myTitle;
  }
  
  subscribeToNavBarTitleChange(){
    this.events.subscribe('navBarTitle:changed', (userEventData) => {
     // userEventData is an array of parameters, so grab our first and only arg
      console.log('Welcome', userEventData[0]);
      this.setNavigationBarTitle(userEventData[0] );
  });


  }

}
