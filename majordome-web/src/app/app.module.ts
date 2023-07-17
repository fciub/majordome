import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MyProvisionsModule } from './features/my-provisions/my-provisions.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyProvisionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
