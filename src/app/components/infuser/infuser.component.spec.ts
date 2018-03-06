import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfuserComponent } from './infuser.component';

describe('InfuserComponent', () => {
  let component: InfuserComponent;
  let fixture: ComponentFixture<InfuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
