import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNgrxComponent } from './store-ngrx.component';

describe('StoreNgrxComponent', () => {
  let component: StoreNgrxComponent;
  let fixture: ComponentFixture<StoreNgrxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreNgrxComponent]
    });
    fixture = TestBed.createComponent(StoreNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
