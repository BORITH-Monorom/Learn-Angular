import { ShortNumberPipe } from "src/app/_utils/pipes/short_number.pipe";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { CropperDialogComponent } from "./cropper-dialog/cropper-dialog.component";
import { DialogComponent } from "./dialog/dialog.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { ImageControlComponent } from "./image-control/image-control.component";
import { LoginComponent } from "./login/login.component";
import { MatDropdownComponent } from "./mat-dropdown/mat-dropdown.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PreviewDialogComponent } from "./preview-dialog/preview-dialog.component";
import { PriceComponent } from "./price/price.component";
import { RegisterComponent } from "./register/register.component";
import { ResumeComponent } from "./resume/resume.component";
import { HjSiteStatisticComponent } from "./hj-site-statistic/hj-site-statistic.component";
import { AppBannerSlideComponent } from "./app-banner-slide/app-banner-slide.component";

export const components: any[] = [
LoginComponent,
RegisterComponent,
NotFoundComponent,
HomeComponent,
FooterComponent,
AboutUsComponent,
ContactUsComponent,
HeaderComponent,
PriceComponent,
MatDropdownComponent,
ResumeComponent,
PreviewDialogComponent,
DialogComponent,
ImageControlComponent,
CropperDialogComponent,
HjSiteStatisticComponent,
AppBannerSlideComponent,
ShortNumberPipe

]

export * from './login/login.component';
export * from './register/register.component';
export * from './not-found/not-found.component';
export * from './home/home.component';
export * from './footer/footer.component';
export * from './about-us/about-us.component';
export * from './contact-us/contact-us.component';
export * from './header/header.component';
export * from './price/price.component';
export * from './mat-dropdown/mat-dropdown.component';
export * from './resume/resume.component';
export * from './preview-dialog/preview-dialog.component';
export * from './dialog/dialog.component';
export * from './image-control/image-control.component';
export * from './hj-site-statistic/hj-site-statistic.component';
export * from './cropper-dialog/cropper-dialog.component';
