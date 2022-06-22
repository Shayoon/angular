import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoussinComponent } from './poussin.component';

describe('PoussinComponent', () => {
  let component: PoussinComponent;
  let fixture: ComponentFixture<PoussinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoussinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoussinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
