import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveHotspotComponent } from './remove-hotspot.component';

describe('RemoveHotspotComponent', () => {
  let component: RemoveHotspotComponent;
  let fixture: ComponentFixture<RemoveHotspotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveHotspotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveHotspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
