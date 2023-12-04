import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChildComponent } from './input-child.component';

describe('InputChildComponent', () => {
  let component: InputChildComponent;
  let fixture: ComponentFixture<InputChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputChildComponent]
    });
    fixture = TestBed.createComponent(InputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
