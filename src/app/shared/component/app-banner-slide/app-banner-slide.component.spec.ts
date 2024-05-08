import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBannerSlideComponent } from './app-banner-slide.component';

describe('AppBannerSlideComponent', () => {
  let component: AppBannerSlideComponent;
  let fixture: ComponentFixture<AppBannerSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBannerSlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBannerSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
