import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerecAlertButtonComponent } from './generec-alert-button.component';

describe('GenerecAlertButtonComponent', () => {
  let component: GenerecAlertButtonComponent;
  let fixture: ComponentFixture<GenerecAlertButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerecAlertButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerecAlertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
