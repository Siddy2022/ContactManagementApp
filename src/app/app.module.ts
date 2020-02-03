import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxListModule, DxSelectBoxModule, DxTemplateModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DxListModule,
    DxSelectBoxModule,
    DxTemplateModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
