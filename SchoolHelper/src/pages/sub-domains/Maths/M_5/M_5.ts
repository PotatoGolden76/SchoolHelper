import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-m5',
  templateUrl: 'M_5.html'
})
export class M_5 {
    
    ma: String;
    mh: String;
    mg: String;

    iem: String;

  	constructor(public navCtrl: NavController) {
       this.ma = "&nbsp `m_a = frac{a_1 + a_2 + .. + a_n}{n}` cu `a_1 , a_2 , ... , a_n in RR` - Media aritmetică;";
       this.mh = "&nbsp `m_h = frac{n}{frac{1}{a_1} + frac{1}{a_2} + ... + frac{1}{a_n}}` cu `a_1 , a_2 , ... , a_n in RR` - Media armonică;";
       this.mg = "&nbsp `m_g = sqrt(a b)` - Media geometrică;";

       this.iem = "Inegalitatea mediilor:  `m_h <= m_g <= m_a`;";
    }

}


