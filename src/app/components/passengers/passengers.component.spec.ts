import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import {MatSliderModule} from '@angular/material/slider';
import { PassengersComponent } from './passengers.component';

describe('PassengersComponent', () => {
  let component: PassengersComponent;
  let fixture: ComponentFixture<PassengersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
