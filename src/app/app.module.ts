import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxListModule, DxSelectBoxModule, DxTemplateModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

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
    DxTemplateModule,
    CommonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
