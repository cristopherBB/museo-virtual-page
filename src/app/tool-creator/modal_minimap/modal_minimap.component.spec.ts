import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMinimapComponent } from './modal_minimap.component';

describe('ModalMinimapComponent', () => {
  let component: ModalMinimapComponent;
  let fixture: ComponentFixture<ModalMinimapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMinimapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMinimapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
