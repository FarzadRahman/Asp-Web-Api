import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';



const routes: Routes = [
    { path: '', component: PaymentDetailsComponent }
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },

    // // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

export const AppRouterModule = RouterModule.forRoot(routes);