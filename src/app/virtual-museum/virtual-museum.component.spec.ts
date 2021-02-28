import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualMuseumComponent } from './virtual-museum.component';

describe('VirtualMuseumComponent', () => {
  let component: VirtualMuseumComponent;
  let fixture: ComponentFixture<VirtualMuseumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualMuseumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
