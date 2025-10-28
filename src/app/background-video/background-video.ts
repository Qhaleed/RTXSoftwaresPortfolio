import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-background-video',
  imports: [],
  templateUrl: './background-video.html',
  styleUrl: './background-video.css',
})
export class BackgroundVideo {
  // Start with image visible; switch to video when iframe reports ready
  videoReady = signal(false);

  onVideoReady() {
    this.videoReady.set(true);
  }
}
