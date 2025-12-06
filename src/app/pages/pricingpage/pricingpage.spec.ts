import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pricingpage } from './pricingpage';

describe('Pricingpage', () => {
  let component: Pricingpage;
  let fixture: ComponentFixture<Pricingpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pricingpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pricingpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
