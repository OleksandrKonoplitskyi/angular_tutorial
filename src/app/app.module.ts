import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent, Hero} from './app.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


@NgModule({
    imports: [
        BrowserModule,
        FormsModule // <-- import the FormsModule before binding with [(ngModel)]
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }


