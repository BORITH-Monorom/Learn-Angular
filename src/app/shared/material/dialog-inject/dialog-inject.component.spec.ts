import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInjectComponent } from './dialog-inject.component';

describe('DialogInjectComponent', () => {
  let component: DialogInjectComponent;
  let fixture: ComponentFixture<DialogInjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogInjectComponent]
    });
    fixture = TestBed.createComponent(DialogInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
