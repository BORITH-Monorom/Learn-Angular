import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcontentComponent } from './childcontent.component';

describe('ChildcontentComponent', () => {
  let component: ChildcontentComponent;
  let fixture: ComponentFixture<ChildcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildcontentComponent]
    });
    fixture = TestBed.createComponent(ChildcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
