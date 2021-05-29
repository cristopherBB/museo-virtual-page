import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMinimapaComponent } from './modal_minimapa.component';

describe('ModalMinimapaComponent', () => {
  let component: ModalMinimapaComponent;
  let fixture: ComponentFixture<ModalMinimapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMinimapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMinimapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
