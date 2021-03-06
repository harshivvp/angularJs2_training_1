import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './components/about.component';
import { routing } from './components/app.routing';

@NgModule({
  imports:      [ BrowserModule , FormsModule, HttpModule , routing ],
  declarations: [ AppComponent , UserComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
