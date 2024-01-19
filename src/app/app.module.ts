import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import {MatInputModule} from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { RegisterComponent } from './shared/register/register.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoreNgrxComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    DashboardComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
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
    provideFirebaseApp(() => initializeApp({"projectId":"even-electron-377007","appId":"1:245871053950:web:dba0928f85f2cf1a1a5c2f","storageBucket":"even-electron-377007.appspot.com","apiKey":"AIzaSyCzDCQbTknMIpamlo4HTd44p4RqEEnBrKY","authDomain":"even-electron-377007.firebaseapp.com","messagingSenderId":"245871053950","measurementId":"G-8C9F1W9G2K"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
