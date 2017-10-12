import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {WarningPage} from "../pages/warning/warning";
import {SettingsPage} from "../pages/settings/settings";
import {LoginPage} from "../pages/login/login";
import {ConsumptionPage} from "../pages/consumption/consumption";
import {BudgetPage} from "../pages/budget/budget";
import {QrcodePage} from "../pages/qrcode/qrcode";
import {HomePage} from "../pages/home/home";
import { UserProvider } from '../providers/user/user';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    QrcodePage,
    BudgetPage,
    ConsumptionPage,
    WarningPage,
    SettingsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    QrcodePage,
    BudgetPage,
    ConsumptionPage,
    WarningPage,
    SettingsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
