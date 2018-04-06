import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-m3',
  templateUrl: 'M_3.html'
})
export class M_3 {

    rad: String;

    r1: String;
    r2: String;
    r3: String;
    r4: String;
    r5: String;
    r6: String;

    rn1: String;
    rn2: String;
    rn3: String;

    rc: String;

  	constructor(public navCtrl: NavController) {
        this.rad = "&nbsp `sqrt(a) = x iff x^2 = a,` unde `a, x in RR, a, x >= 0`;";

        this.r1 = "&nbsp Dacă `a >= 0, b >= 0,` atunci `sqrt(a) * sqrt(b) = sqrt(a * b)`;";
        this.r2 = "&nbsp Dacă `a >= 0, b > 0,` atunci `sqrt(a) : sqrt(b) = sqrt(a : b) iff frac{sqrt(a)}{sqrt(b)} = sqrt(frac{a}{b})`;";
        this.r3 = "&nbsp `sqrt(a^(2)b) = a sqrt(b), a >= 0, b >= 0`;";
        this.r4 = "&nbsp `sqrt(a^(2)b) = abs(a)sqrt(b), a in RR, b >= 0`;";
        this.r5 = "&nbsp `sqrt(a^2) = (sqrt(a))^2 = a` dacă `a in RR_+`;";
        this.r6 = "&nbsp `sqrt(a^2) = abs(a), a in RR`;";

        this.rn1 = "&nbsp `frac{ color(white)()^( sqrt(b) // ) c }{a sqrt(b)} = frac{c sqrt(b)}{a * b}, b > 0, a != 0`;";
        this.rn2 = "&nbsp `frac{ color(white)()^( sqrt(a) ∓ sqrt(b) // ) c }{sqrt(a) +- sqrt(b)} = frac{c(sqrt(a) ∓ sqrt(b))}{a - b}, b > 0, a > 0, a != b`;";
        this.rn3 = "&nbsp `frac{n}{a sqrt(b) pm c sqrt(d)} = frac{n (a sqrt(b) ∓ c sqrt(d))}{a^(2) b - c^(2) d}, b > 0, d > 0, a in QQ^ast, c in QQ^ast` și `a^(2) b != c^(2) d`;";

        this.rc = "&nbsp `sqrt(a pm sqrt(b)) = sqrt(frac{a + c}{2}) pm sqrt(frac{a - c}{2}),` unde `c = sqrt(a^(2) - b)`;";
    }

}


