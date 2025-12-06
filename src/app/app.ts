import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from "./navbar/navbar";
import { Hero } from "./hero/hero";
import { About } from "./about/about";
import { Gallery } from "./gallery/gallery";
import { Preview } from "./preview/preview";
import { Loader } from "./loader/loader";
import { Footer } from "./footer/footer";
import { Pricing } from "./pricing/pricing";
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [CommonModule, Navbar, Hero, About, Gallery, Preview, Loader, Footer, Pricing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('RTXSoftwaresPortfolio');
  showLoader = signal(true);

  ngOnInit() {
    // Lock page scroll while loader is visible
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    // Show loader for 2 seconds on page load
    setTimeout(() => {
      this.showLoader.set(false);

      // Restore scroll after loader hides
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    }, 2000);
  }
}
