import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventBindingComponent } from './data_binding/event-binding/event-binding.component';
import { HeaderComponent } from './header/header.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { CreateClassComponent } from './data_binding/create-class/create-class.component';
import { TableComponent } from './table/table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './shared/login/login.component';
import {LayoutModule} from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/store/app.reducer';
import { StoreNgrxComponent } from './shared/store-ngrx/store-ngrx.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { NameNavComponent } from './name-nav/name-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    HeaderComponent,
    TypescriptComponent,
    CreateClassComponent,
    TableComponent,
    LoginComponent,
    StoreNgrxComponent,
    NameNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    LayoutModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers),
    MatSidenavModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
