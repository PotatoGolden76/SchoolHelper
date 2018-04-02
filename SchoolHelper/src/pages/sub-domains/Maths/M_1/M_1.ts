import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-m1',
  templateUrl: 'M_1.html'
})
export class M_1 {
	natural : String;
	int_nat : String;
	real : String;
	rational: String;
	i_rational: String;

	e1: String;
	e2: String;
	e3: String;
	e4: String;

	e5: String;
	e6: String;
	e7: String;
	e8: String;

	e9: String;
	e10: String;
	e11: String;
	e12: String;
	e13: String;
	e14: String;
	
  	constructor(public navCtrl: NavController) {
  		this.natural = "&nbsp `NN` - Mulțimea numerelor naturale;";
  		this.int_nat = "&nbsp `ZZ` - Mulțimea numerelor întregi;";
  		this.real = "&nbsp `RR` - Mulțimea numerelor reale;";
  		this.rational = "&nbsp `QQ` - Mulțimea numerelor raționale;";
  		this.i_rational = "&nbsp `RR backslash QQ` - Mulțimea numerelor iraționale;";

  		this.e1 = "`NN sub ZZ sub QQ sub RR`";
  		this.e2 = "`NN = {0, 1, 2, 3, ...};`";
  		this.e3 = "`ZZ = {..., `-`2, `-`1, 0, 1, ...};`";
  		this.e4 = "`QQ = {frac{a}{b} | a in ZZ , b in ZZ^ast};`";

  		this.e5 = "`NN^ast = NN backslash {0};`";
  		this.e6 = "`ZZ^ast = ZZ backslash {0};`";
  		this.e7 = "`QQ^ast = QQ backslash {0};`";
  		this.e8 = "`RR^ast = RR backslash {0};`";

  		this.e9 = "`ZZ_(+) = { x in ZZ | x > 0};`";
  		this.e10 = "`ZZ_(-) = { x in ZZ | x < 0};`";

  		this.e11 = "`QQ_(+) = { x in QQ | x > 0};`";
  		this.e12 = "`QQ_(-) = { x in QQ | x < 0};`";

  		this.e13 = "`RR_(+) = { x in RR | x > 0};`";
  		this.e14 = "`RR_(-) = { x in RR | x < 0};`"; 		  	
  	}

}


