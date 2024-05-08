import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule,AsyncPipe,NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.development';
import { register } from 'swiper/element/bundle';
import { StoreModule } from '@ngrx/store';
import { EmployerRoutingModule } from './employer/employer-routing.module';
// import { EmployerModule } from './employer/employer.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { counterReducer } from './core/state/counter/counter.reducer';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModule } from './shared/shared.module';
import { EmployerModule } from './employer/employer.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
register();
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    EmployerModule,
    // EmployerRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    AsyncPipe,
    BrowserModule,
    CoreModule,
    LayoutModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    MatTableModule,
    MatPaginatorModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}


