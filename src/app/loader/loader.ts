import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.css',
})
export class Loader implements OnInit {
  loaderClass = 'show';

  ngOnInit() {
    // After 2 seconds, change class from show to hidden
    setTimeout(() => {
      this.loaderClass = 'hidden';
    }, 2000);
  }
}
