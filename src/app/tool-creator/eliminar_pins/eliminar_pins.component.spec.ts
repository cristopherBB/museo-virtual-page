import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPinsComponent } from './eliminar_pins.component';

describe('EliminarPinsComponent', () => {
  let component: EliminarPinsComponent;
  let fixture: ComponentFixture<EliminarPinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarPinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
