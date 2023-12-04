import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventBindingComponent } from './data_binding/event-binding/event-binding.component';
import { HeaderComponent } from './header/header.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { CreateClassComponent } from './data_binding/create-class/create-class.component';
import { TableComponent } from './table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './component/login/login.component';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/store/app.reducer';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NameNavComponent } from './name-nav/name-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './shared/directive/ngif/ngif/ngif.component';
import { NgswitchComponent } from './shared/directive/ngswitch/ngswitch/ngswitch.component';
import { NgclassComponent } from './shared/directive/ngclass/ngclass.component';
import { MatCardModule } from '@angular/material/card';
import { NgcontentComponent } from './shared/directive/ngcontent/ngcontent.component';
import { ChildcontentComponent } from './shared/directive/ngcontent/childcontent/childcontent.component';
import { NgtemplateComponent } from './shared/directive/ngtemplate/ngtemplate.component';
import { ViewchildComponent } from './shared/angularcore/viewchild/viewchild.component';
import { BindingComponent } from './shared/angularcore/binding/binding.component';
import { ParentComponent } from './shared/angularcore/parent/parent.component';
import { NgforComponent } from './shared/directive/ngfor/ngfor.component';
import { ChildComponent } from './shared/lifecycle-hook/child/child.component';
import { ParentHookComponent } from './shared/lifecycle-hook/parent-hook/parent-hook.component';
import { InputComponent } from './shared/angularcore/input/input.component';
import { OutputComponent } from './shared/angularcore/output/output.component';
import { InputChildComponent } from './shared/angularcore/input/input-child/input-child.component';
import { OutputChildComponent } from './shared/angularcore/output/output-child/output-child.component';
import { DialogComponent } from './shared/material/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogExampleComponent } from './shared/material/dialog-example/dialog-example.component';
import { DialogInjectComponent } from './shared/material/dialog-inject/dialog-inject.component';
import { ModalComponent } from './shared/modal/modal.component';
import { StyleBindingComponent } from './data_binding/style-binding/style-binding.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './component/verify-email/verify-email.component';
@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    HeaderComponent,
    TypescriptComponent,
    CreateClassComponent,
    TableComponent,
    LoginComponent,
    LoginComponent,

    NameNavComponent,
    NgifComponent,
    NgswitchComponent,
    NgclassComponent,
    NgcontentComponent,
    ChildcontentComponent,
    NgtemplateComponent,
    ViewchildComponent,
    BindingComponent,
    ParentComponent,
    NgforComponent,
    ChildComponent,
    ParentHookComponent,
    InputComponent,
    OutputComponent,
    InputChildComponent,
    OutputChildComponent,
    DialogComponent,
    DialogExampleComponent,
    DialogInjectComponent,
    ModalComponent,
    StyleBindingComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    MatCardModule,
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
    CommonModule,
    MatDividerModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
