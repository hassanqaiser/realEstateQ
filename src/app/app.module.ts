// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, ApplicationRef } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
// import { HomeIndexModule } from './+home';

// import {MdCardModule} from '@angular2-material/card';
// import {MdButtonModule} from '@angular2-material/button';
// import {MdIconModule} from '@angular2-material/icon';
// import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
// import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
// import {MdRadioModule} from '@angular2-material/radio/radio';
// import {MdSlideToggleModule} from '@angular2-material/slide-toggle/slide-toggle';
// import {MdSliderModule} from '@angular2-material/slider/slider';
// import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
// import {MdListModule} from '@angular2-material/list/list';
// import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
// import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
// import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
// import {MdInputModule} from '@angular2-material/input/input';
// import {MdTabsModule} from '@angular2-material/tabs/tabs';
// import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
// import {MdTooltipModule} from '@angular2-material/tooltip/tooltip';
// import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
// import {PortalModule} from '@angular2-material/core/portal/portal-directives';
// import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
// import {MdMenuModule} from '@angular2-material/menu/menu';
// import {RtlModule} from '@angular2-material/core/rtl/dir';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     CommonModule,
//     FormsModule,
//     HomeIndexModule,
    
//     MdCardModule,
//     MdButtonModule,
//     MdIconModule,
//     MdButtonToggleModule,
//     MdCheckboxModule,
//     MdRadioModule,
//     MdSlideToggleModule,
//     MdSliderModule,
//     MdSidenavModule,
//     MdListModule,
//     MdGridListModule,
//     MdProgressCircleModule,
//     MdProgressBarModule,
//     MdInputModule,
//     MdTabsModule,
//     MdToolbarModule,
//     MdTooltipModule,
//     MdRippleModule,
//     PortalModule,
//     OverlayModule,
//     MdMenuModule,
//     RtlModule
//   ],
//   providers: [],
//   entryComponents: [AppComponent],
//   bootstrap: [
//     AppComponent
//   ]
// })


import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';

import { AuthModule } from './auth';
import { mainModule } from './main';
import { FirebaseModule } from './firebase';
import { AppRoutes }       from './app.routes';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FirebaseModule, AuthModule, mainModule, AppRoutes, MdToolbarModule, MdSidenavModule],
  bootstrap: [AppComponent]
})

 

export class AppModule {}
