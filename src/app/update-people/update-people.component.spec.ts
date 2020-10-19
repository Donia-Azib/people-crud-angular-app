import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePeopleComponent } from './update-people.component';

describe('UpdatePeopleComponent', () => {
  let component: UpdatePeopleComponent;
  let fixture: ComponentFixture<UpdatePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
