import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasMinimapaComponent } from './canvas_minimapa.component';

describe('CanvasMinimapaComponent', () => {
  let component: CanvasMinimapaComponent;
  let fixture: ComponentFixture<CanvasMinimapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasMinimapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasMinimapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
