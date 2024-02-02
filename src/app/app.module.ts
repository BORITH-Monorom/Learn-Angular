import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './shared/login/login.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './shared/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { RegisterComponent } from './shared/register/register.component';
import { ImageControlComponent } from './component/image-control/image-control.component';
import { CropperDialogComponent } from './component/cropper-dialog/cropper-dialog.component';
import { ResumeComponent } from './shared/resume/resume.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { PriceComponent } from './shared/price/price.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.development';
import { register } from 'swiper/element/bundle';
import { PurchaseComponent } from './employer/purchase/purchase.component';
import { StoreModule } from '@ngrx/store';
import { EmployerRoutingModule } from './employer/employer-routing.module';
import { EmployerModule } from './employer/employer.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { counterReducer } from './shared/store/counter.reducer';
import { MaterialModule } from './Material.Module';
import { TestModule } from './a_test/test.module';
import { BtncounterComponent } from './a_test/btncounter/btncounter.component';
import { CounterDisplayComponent } from './a_test/counter-display/counter-display.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    RegisterComponent,
    ImageControlComponent,
    CropperDialogComponent,
    ResumeComponent,
    PriceComponent,
    PurchaseComponent,
    CounterDisplayComponent,
    BtncounterComponent,

  ],
  imports: [
    EmployerModule,
    CommonModule,
    EmployerRoutingModule,
    ImageCropperModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    MaterialModule,
    TestModule,
    StoreModule.forRoot({counter:counterReducer}),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'even-electron-377007',
        appId: '1:245871053950:web:dba0928f85f2cf1a1a5c2f',
        storageBucket: 'even-electron-377007.appspot.com',
        apiKey: 'AIzaSyCzDCQbTknMIpamlo4HTd44p4RqEEnBrKY',
        authDomain: 'even-electron-377007.firebaseapp.com',
        messagingSenderId: '245871053950',
        measurementId: 'G-8C9F1W9G2K',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
