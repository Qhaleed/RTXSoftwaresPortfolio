import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundVideo } from './background-video';

describe('BackgroundVideo', () => {
  let component: BackgroundVideo;
  let fixture: ComponentFixture<BackgroundVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundVideo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
