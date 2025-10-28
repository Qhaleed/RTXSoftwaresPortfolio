import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroText } from './hero-text';

describe('HeroText', () => {
  let component: HeroText;
  let fixture: ComponentFixture<HeroText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
