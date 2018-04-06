import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InfoPage } from '../info/info';

import { M_1 } from '../sub-domains/Maths/M_1/M_1';
import { M_2 } from '../sub-domains/Maths/M_2/M_2';
import { M_3 } from '../sub-domains/Maths/M_3/M_3';
import { M_4 } from '../sub-domains/Maths/M_4/M_4';
import { M_5 } from '../sub-domains/Maths/M_5/M_5';

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
  				{ title: 'Radicali', icon: 'create', component: M_3},
  				{ title: 'Divizibilitate', icon: 'pause', component: M_4},
  				{ title: 'Medii', icon: 'calculator', component: M_5},
  				{ title: 'Mai multe pagini în curând', icon: 'construct', component: InfoPage}
  			];

  			this.title = 'Matematică';
  		} else if(this.selectedItem.content === 'physics') {
  			this.topics = [
  				{ title: 'Pagină în lucru!', icon: 'construct', component: InfoPage}
  			];

			this.title = 'Fizică';
  		} else if(this.selectedItem.content === 'chem') {
			this.topics = [
  				{ title: 'Pagină în lucru!', icon: 'construct', component: InfoPage}
  			];

  			this.title = 'Chimie';
  		}
  	}

  	onClick(e) {
  		this.navCtrl.push(e.component);
  	}

}


