/**
 * Created by lon on 12/3/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';

import {EqualValidator} from "../services/equal-validator.directive";
import {FrontRoutingModule} from "./front-routing.module";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AboutComponent} from "./about/about.component";
import {ToastComponent} from "../shared/toast/toast.component";
import {GlobalModule} from "../global/global.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FrontRoutingModule,
      GlobalModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    EqualValidator
  ],
  providers: [
  ],
  exports: [
  ]
})
export class FrontModule {}