import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtncounterComponent } from './btncounter.component';

describe('BtncounterComponent', () => {
  let component: BtncounterComponent;
  let fixture: ComponentFixture<BtncounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtncounterComponent]
    });
    fixture = TestBed.createComponent(BtncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
