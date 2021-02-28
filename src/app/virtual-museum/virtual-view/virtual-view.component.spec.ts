import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualViewComponent } from './virtual-view.component';

describe('VirtualViewComponent', () => {
  let component: VirtualViewComponent;
  let fixture: ComponentFixture<VirtualViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
