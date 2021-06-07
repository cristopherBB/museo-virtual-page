import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePinsComponent } from './remove_pins.component';

describe('RemovePinsComponent', () => {
  let component: RemovePinsComponent;
  let fixture: ComponentFixture<RemovePinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovePinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
