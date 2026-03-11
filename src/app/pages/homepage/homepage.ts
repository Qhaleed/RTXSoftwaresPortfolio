import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../navbar/navbar';
import { Hero } from '../../hero/hero';
import { About } from '../../about/about';
import { Gallery } from '../../gallery/gallery';
import { Preview } from '../../preview/preview';
import { Loader } from '../../loader/loader';
import { Footer } from '../../footer/footer';
import { Pricing } from '../../pricing/pricing';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, Navbar, Hero, About, Gallery, Preview, Loader, Footer, Pricing],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage implements OnInit {
  showLoader = signal(true);

  ngOnInit() {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    setTimeout(() => {
      this.showLoader.set(false);
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    }, 2000);
  }
}
