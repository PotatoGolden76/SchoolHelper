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

    e7: String;
    e8: String;
    e9: String;
    e10: String;
    e11: String;
    e12: String;

    e13: String;
    e14: String;
    e15: String;
    e16: String;
    e17: String;
    e18: String;

  	constructor(public navCtrl: NavController) {
  		this.reunion = "&nbsp `A cup B = {x | x in A` sau `x in B}` - Reuniune;";
        this.intersection = "&nbsp `A cap B = {x | x in A` și `x in B}` - Intersecție;";
        this.diff = "&nbsp `A backslash B = {x | x in A` și `x notin B}` - Diferență;";

        this.e1 = "&nbsp `1 + 2 + 3 + ... + n = frac{n * (n + 1)}{2}, AA n in NN^ast`;";
        this.e2 = "&nbsp `n! = 1 * 2 * 3 * ... * n, AA in NN^ast` (n factorial);";
        this.e3 = "&nbsp &nbsp `0! = 1`;";
        this.e4 = "&nbsp `f * a pm f * b = f * (a pm b), AA a, b, f in RR`;";

        this.e5 = "&nbsp În `NN: a = b * c + r, 0 <= r < b`;";
        this.e6 = "&nbsp În `ZZ: a = b * c + r, 0 <= r < abs(b)`;";

        this.e7 = "&nbsp `a^n = ubrace(a * a * a * .. * a)_(text(de n ori)); a in RR, n in NN^ast`;";
        this.e8 = "&nbsp `a^0 = 1, AA a in RR^ast`;";
        this.e9 = "&nbsp `a^1 = a, AA a in RR`;";
        this.e10 = "&nbsp `1^n = 1, AA n in NN`;";
        this.e11 = "&nbsp `0^0` - nu are sens;";
        this.e12 = "&nbsp `a^-1 = frac{1}{a^n}, a in RR^ast, n in NN`";

        this.e13 = "&nbsp `a^m * a^n = a^(m + n), AA a in RR^ast, m, n in ZZ`;";
        this.e14 = "&nbsp `a^m : a^n = a^(m - n), AA a in RR^ast, m, n in ZZ`;";
        this.e15 = "&nbsp `(a^m)^n = a^(m * n), AA a in RR^ast, m, n in ZZ`;";
        this.e16 = "&nbsp `(a * b)^n = a^n * b^n, AA a, b in RR^ast, n in ZZ`;";
        this.e17 = "&nbsp `(a : b)^n = a^n : b^n, AA a, b in RR^ast, n in ZZ`;";
        this.e18 = "&nbsp `(text(-)a)^n = {(a^n, text(dacă n este număr par)),(text(-)(a^n), text(dacă n este număr impar)):}`";
  	}

}


