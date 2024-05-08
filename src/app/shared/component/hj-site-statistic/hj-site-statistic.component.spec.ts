import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HjSiteStatisticComponent } from './hj-site-statistic.component';

describe('HjSiteStatisticComponent', () => {
  let component: HjSiteStatisticComponent;
  let fixture: ComponentFixture<HjSiteStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HjSiteStatisticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HjSiteStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
