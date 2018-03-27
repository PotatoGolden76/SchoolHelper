import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InfoPage } from '../info/info';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
	
	list5: Array<{title: string, icon: string, component: any}> //5th grade pages
	list6: Array<{title: string, icon: string, component: any}> //6th grade pages
	list7: Array<{title: string, icon: string, component: any}> //7th grade pages
	list8: Array<{title: string, icon: string, component: any}> //8th grade pages

	//array init based on item clicked
	selectedItem: any;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.selectedItem = navParams.get('item');

  		if(this.selectedItem.content === 'maths') {
  			this.list5 = [
  				{ title: 'Numere Reale', icon: 'add', component: InfoPage },
  				{ title: 'Fractii', icon: 'calculator', component: InfoPage }
  			];
			this.list6 = [
  				{ title: 'Numere Reale', icon: 'add', component: InfoPage },
  				{ title: 'Fractii', icon: 'calculator', component: InfoPage }
  			];
  			this.list7 = [
  				{ title: 'Numere Reale', icon: 'add', component: InfoPage },
  				{ title: 'Fractii', icon: 'calculator', component: InfoPage }
  			];

  			this.list8 = [
  				{ title: 'Numere Reale', icon: 'add', component: InfoPage },
  				{ title: 'Fractii', icon: 'calculator', component: InfoPage }
  			];
  		} else if(this.selectedItem.content === 'physics') {
			this.list5 = [
  				{ title: 'Numere Reale', icon: 'add', component: InfoPage },
  				{ title: 'Fractii', icon: 'calculator', component: InfoPage }
  			];

  			this.list8 = [
  				{ title: 'Numere Reale', icon: 'add', component: InfoPage },
  				{ title: 'Fractii', icon: 'calculator', component: InfoPage }
  			];
  		} else if(this.selectedItem.content === 'chem') {
  			
  		}
  	}

}


