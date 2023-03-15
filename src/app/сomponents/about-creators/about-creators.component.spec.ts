import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCreatorsComponent } from './about-creators.component';

describe('AboutCreatorsComponent', () => {
  let component: AboutCreatorsComponent;
  let fixture: ComponentFixture<AboutCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCreatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
