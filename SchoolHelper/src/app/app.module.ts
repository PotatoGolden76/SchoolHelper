import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
import { CatPage } from '../pages/categ/categ';
import { ListPage } from '../pages/list/list';

import { M_1 } from '../pages/sub-domains/Maths/M_1/M_1';
import { M_2 } from '../pages/sub-domains/Maths/M_2/M_2';
import { M_3 } from '../pages/sub-domains/Maths/M_3/M_3';
import { M_4 } from '../pages/sub-domains/Maths/M_4/M_4';
import { M_5 } from '../pages/sub-domains/Maths/M_5/M_5';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MathJaxDirective } from '../directives/Mathjax.directive';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CatPage,
    InfoPage,
    ListPage,
    MathJaxDirective,
    M_1,
    M_2,
    M_3,
    M_4,
    M_5
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CatPage,
    InfoPage,
    ListPage,
    M_1,
    M_2,
    M_3,
    M_4,
    M_5
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
