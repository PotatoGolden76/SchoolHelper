import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { InfoPage } from '../info/info';
import { CatPage } from '../categ/categ';

@Component({
  selector: 'page-categ',
  templateUrl: 'categ.html'
})
export class CatPage {

	cards: Array<{title: string, photo: string, component: any}>;
  	constructor(public navCtrl: NavController) {
  		this.cards = [
      		{ title: 'Matematică', photo: '../assets/imgs/maths.jpg', component: HomePage },
      		{ title: 'Fizică', photo: '../assets/imgs/physics.jpg', component: CatPage },
      		{ title: 'Chimie', photo: '../assets/imgs/chem.jpg', component: InfoPage}
    	];
  	}

}


