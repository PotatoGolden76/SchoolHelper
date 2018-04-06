import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-m4',
  templateUrl: 'M_4.html'
})
export class M_4 {

    n1: String;
    n2: String;
    n3: String;
    n4: String;

    p1: String;
    p2: String;
    p3: String;
    p4: String;
    p5: String;
    p6: String;
    p7: String;
    p8: String;

  	constructor(public navCtrl: NavController) {
        this.n1 = "&nbsp `a vdots b` - a este divizibil cu b;";
        this.n2 = "&nbsp `a | b` - b divide a;";
        this.n3 = "&nbsp `(a;b)` - cel mai mare divizor comun al numerelor a și b;";
        this.n4 = "&nbsp `[a;b]` - cel mai mare multiplu comun al numerelor a și b;";

        this.p1 = "&nbsp `1 | n, AA n in NN`;";
        this.p2 = "&nbsp `0 vdots n, AA n in NN^ast`;";
        this.p3 = "&nbsp `n vdots n, AA n in NN^ast`;";
        this.p4 = "&nbsp `d | n` și `n | m implies d | m`;";
        this.p5 = "&nbsp `d | n` și `n | d implies d = n`;";
        this.p6 = "&nbsp `d | n implies d | k*n AA d in NN^ast`;";
        this.p7 = "&nbsp `d | a` și `d | n implies d | (a pm b)`;";
        this.p8 = "&nbsp `d | a` și `d | n implies d | (u*a pm m*b), AA a, b, n, u in NN, d != 0`;";
    }

}


