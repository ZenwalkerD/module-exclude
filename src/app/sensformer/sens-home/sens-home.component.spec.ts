import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensHomeComponent } from './sens-home.component';

describe('SensHomeComponent', () => {
  let component: SensHomeComponent;
  let fixture: ComponentFixture<SensHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
