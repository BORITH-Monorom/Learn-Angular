import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import * as sharedComponents from './component';
import { HttpLoaderFactory } from "../app.module";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SharedRoutingModule } from "./shared-routing.module";
import { ImageCropperModule } from "ngx-image-cropper";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectModule } from "@angular/material/select";
import {MatChipsModule} from '@angular/material/chips';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
@NgModule({
  providers:[

  ],
  declarations: [
    ...sharedComponents.components,
    // ...sharedComponents.pipe,


  ],
  imports:[
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }}),
      MatCardModule,
MatDialogModule,
MatInputModule,
MatTableModule,
FormsModule,
MatPaginatorModule,
MatToolbarModule,
MatIconModule,
MatButtonModule,
MatDividerModule,
MatListModule,
MatTabsModule,
MatSidenavModule,
MatExpansionModule,
CommonModule,
MatFormFieldModule,
ReactiveFormsModule,
MatMenuModule,
MatSliderModule,
SharedRoutingModule,
ImageCropperModule,
NgxSkeletonLoaderModule,
MatAutocompleteModule,
MatSelectModule,
MatChipsModule,
  ],
  exports:[
// .....Module,
MatCardModule,
MatDialogModule,
MatInputModule,
MatTableModule,
FormsModule,
MatPaginatorModule,
MatToolbarModule,
MatIconModule,
MatButtonModule,
MatDividerModule,
MatListModule,
MatTabsModule,
MatSidenavModule,
MatExpansionModule,
CommonModule,
MatFormFieldModule,
ReactiveFormsModule,
MatMenuModule,
MatSliderModule,
SharedRoutingModule,
ImageCropperModule,
NgxSkeletonLoaderModule,
MatAutocompleteModule,
MatSelectModule,
MatChipsModule,
...sharedComponents.components,
// ...sharedComponents.pipes,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule{
  constructor() {}
}
