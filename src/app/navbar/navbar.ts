import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  isVisible = true;
  lastScrollTop = 0;
  scrollThreshold = 100; // Minimum scroll before hiding
  scrollUpBuffer = 20; // Must scroll up this many pixels before showing navbar

  ngOnInit() {
    this.lastScrollTop = window.scrollY;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;

    // Don't hide if at the very top
    if (currentScroll <= this.scrollThreshold) {
      this.isVisible = true;
      this.lastScrollTop = currentScroll;
      return;
    }

    const scrollDifference = this.lastScrollTop - currentScroll;

    // Scrolling down - hide navbar
    if (currentScroll > this.lastScrollTop && currentScroll > this.scrollThreshold) {
      this.isVisible = false;
    }
    // Scrolling up - show navbar only if scrolled up enough
    else if (scrollDifference > this.scrollUpBuffer) {
      this.isVisible = true;
    }

    this.lastScrollTop = currentScroll;
  }
}
