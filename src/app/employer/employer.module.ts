
import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Employer from "./components/index";

import { EmployerRoutingModule } from "./employer-routing.module";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [...Employer.components],
  imports: [
    EmployerRoutingModule,
    SharedModule,
    CommonModule,

  ],
  exports: [...Employer.components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class EmployerModule { }
