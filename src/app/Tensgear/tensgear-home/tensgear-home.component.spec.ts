import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TensgearHomeComponent } from './tensgear-home.component';

describe('TensgearHomeComponent', () => {
  let component: TensgearHomeComponent;
  let fixture: ComponentFixture<TensgearHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TensgearHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TensgearHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
