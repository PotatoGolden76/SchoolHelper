import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InfoPage } from '../info/info';

import { M_1 } from '../sub-domains/Maths/M_1/M_1';
import { M_2 } from '../sub-domains/Maths/M_2/M_2';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
	
	topics: Array<{title: string, icon: string, component: any}> //list of the topics
	title: string;

	//array init based on item clicked
	selectedItem: any;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.selectedItem = navParams.get('item');

  		if(this.selectedItem.content === 'maths') {
  			this.topics = [
  				{ title: 'Mulțimi numerice', icon: 'infinite', component: M_1},
  				{ title: 'Operații', icon: 'calculator', component: M_2},
  				{ title: 'Divizibilitate', icon: 'calculator', component: InfoPage},
  				{ title: 'Medii', icon: 'calculator', component: InfoPage},
  				{ title: 'Calcul algebric', icon: 'calculator', component: InfoPage},
  				{ title: 'Intervale', icon: 'calculator', component: InfoPage}
  			];

  			this.title = 'Matematică';
  		} else if(this.selectedItem.content === 'physics') {
  			this.topics = [
  				{ title: 'Secțiune în lucru!', icon: 'hammer', component: InfoPage}
  			];

			this.title = 'Fizică';
  		} else if(this.selectedItem.content === 'chem') {
			this.topics = [
  				{ title: 'Secțiune în lucru!', icon: 'hammer', component: InfoPage}
  			];

  			this.title = 'Chimie';
  		}
  	}

  	onClick(e) {
  		this.navCtrl.push(e.component);
  	}

}


