import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InfoPage } from '../info/info';
import { CatPage } from '../categ/categ';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
  	constructor(public navCtrl: NavController) {

  	}

  	infoToggle() {
  		this.navCtrl.push(InfoPage);
  	}

  	catToggle() {
  		this.navCtrl.setRoot(CatPage);
  	}
}


