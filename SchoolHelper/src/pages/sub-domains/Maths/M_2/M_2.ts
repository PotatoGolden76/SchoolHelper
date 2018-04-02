import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-m2',
  templateUrl: 'M_2.html'
})
export class M_2 {
	
    reunion: String;
    intersection: String;
    diff: String;

    e1: String;
    e2: String;
    e3: String;
    e4: String;

    e5: String;
    e6: String;


  	constructor(public navCtrl: NavController) {
  		this.reunion = "&nbsp `A cup B = {x | x in A` sau `x in B}` - Reuniune;";
        this.intersection = "&nbsp `A cap B = {x | x in A` și `x in B}` - Intersecție;";
        this.diff = "&nbsp `A backslash B = {x | x in A` sau `x notin B}` - Diferență;";

        this.e1 = "&nbsp `1 + 2 + 3 + ... + n = frac{n * (n + 1)}{2}, AA n in NN^ast`;";
        this.e2 = "&nbsp `n! = 1 * 2 * 3 * ... * n, AA in NN^ast` (n factorial);";
        this.e3 = "&nbsp &nbsp `0! = 1`;";
        this.e4 = "&nbsp `f * a pm f * b = f * (a pm b), AA a, b, f in RR`;";

        this.e5 = "&nbsp În `NN: a = b * c + r, 0 <= r < b`;";
        this.e6 = "&nbsp În `ZZ: a = b * c + r, 0 <= r < abs(b)`;";
  	}

}


