import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallShopComponent } from './small-shop.component';

describe('SmallShopComponent', () => {
  let component: SmallShopComponent;
  let fixture: ComponentFixture<SmallShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
