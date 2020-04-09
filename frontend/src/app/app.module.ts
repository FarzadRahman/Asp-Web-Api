import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ToastrModule } from 'ngx-toastr';

import { AppRouterModule } from './app-routing.module';


import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { PaymentDetailService } from './shared/payment-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRouterModule
  ],
  providers: [PaymentDetailService],

  bootstrap: [AppComponent]
})
export class AppModule { }
