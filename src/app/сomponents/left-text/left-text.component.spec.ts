import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTextComponent } from './left-text.component';

describe('LeftTextComponent', () => {
  let component: LeftTextComponent;
  let fixture: ComponentFixture<LeftTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
