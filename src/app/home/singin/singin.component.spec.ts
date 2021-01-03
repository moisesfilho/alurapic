import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInComponent } from './singin.component';

describe('SinginComponent', () => {
  let component: SingInComponent;
  let fixture: ComponentFixture<SingInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
