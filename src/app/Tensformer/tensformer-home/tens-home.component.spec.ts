import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TensHomeComponent } from './tens-home.component';

describe('TensHomeComponent', () => {
  let component: TensHomeComponent;
  let fixture: ComponentFixture<TensHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TensHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TensHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
