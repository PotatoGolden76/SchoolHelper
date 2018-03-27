import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListPage } from '../list/list';


@Component({
  selector: 'page-categ',
  templateUrl: 'categ.html'
})
export class CatPage {

	//array init
	cards: Array<{title: string, photo: string, content: string}>;
	constructor(public navCtrl: NavController) {
		this.cards = [
			{ title: 'Matematică', photo: '../assets/imgs/maths.jpg', content: 'maths' },
			{ title: 'Fizică', photo: '../assets/imgs/physics.jpg', content: 'physics' },
			{ title: 'Chimie', photo: '../assets/imgs/chem.jpg', content: 'chem' }
		];
	}

	//button tap method
	buttonTapped(item) {
	  this.navCtrl.push(ListPage, {item: item});
	}

}


