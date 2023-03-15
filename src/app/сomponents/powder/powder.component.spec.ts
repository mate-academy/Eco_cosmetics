import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowderComponent } from './powder.component';

describe('PowderComponent', () => {
  let component: PowderComponent;
  let fixture: ComponentFixture<PowderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
