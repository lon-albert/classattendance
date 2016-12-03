/**
 * Created by lon on 12/3/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { FrontRoutingModule } from './front-routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent} from './login/login.component';
import {RegisterComponent} from "./register/register.component";
// import {DataService} from "../services/data.service";
// import {ToastComponent} from "../shared/toast/toast.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FrontRoutingModule
    ],
    declarations: [
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AboutComponent
    ],
    providers: [
        // DataService,
        // ToastComponent
    ]
})
export class FrontModule {}