import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumEmployersComponent } from './premium-employers.component';

describe('PremiumEmployersComponent', () => {
  let component: PremiumEmployersComponent;
  let fixture: ComponentFixture<PremiumEmployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumEmployersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiumEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
