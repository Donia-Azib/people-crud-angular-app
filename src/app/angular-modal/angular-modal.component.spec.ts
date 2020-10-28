import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularModalComponent } from './angular-modal.component';

describe('AngularModalComponent', () => {
  let component: AngularModalComponent;
  let fixture: ComponentFixture<AngularModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
