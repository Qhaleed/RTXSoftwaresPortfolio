import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  title: string;
  images: string[];
  link?: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  selectedImage: string | null = null;

  galleryItems: GalleryItem[] = [
    {
      title: 'Adzu Chat',
      images: ['assets/adzuChat1.png', 'assets/adzuChat2.png', 'assets/adzuChat1.png'],
      link: 'https://adzu-chat-frontend.vercel.app/'
    },
    // {
    //   title: 'Ateneo Forum',
    //   images: ['assets/ateneoForum1.png', 'assets/ateneoForum2.png', 'assets/ateneoForum3.png']
    // },
    {
      title: 'Boost Buddy',
      images: ['assets/boostBuddy1.png', 'assets/boostBuddy2.png', 'assets/boostBuddy1.png']
    },
    {
      title: 'Faculty',
      images: ['assets/faculty1.png', 'assets/faculty2.png', 'assets/faculty1.png'],
      link: 'https://adzu-formationsystem.vercel.app/login'
    },
    {
      title: 'MyWildlife',
      images: ['assets/mywildlife/image1.png', 'assets/mywildlife/image2.png', 'assets/mywildlife/image3.png', 'assets/mywildlife/image4.png'],
      link: 'https://mywildlife.vercel.app/'
    },
    {
      title: 'Cynergy',
      images: ['assets/cynergy1.png', 'assets/cynergy2.png', 'assets/cynergy3.png']
    },
    {
      title: 'Mujer',
      images: ['assets/mujer/image1.png', 'assets/mujer/image2.png', 'assets/mujer/image3.png', 'assets/mujer/image4.png'],
      link: 'https://mujer-lgbt-zc.vercel.app/'

    }
  ];

  scrollPrev(event: Event) {
    const button = event.target as HTMLElement;
    const carousel = button.closest('.relative')?.querySelector('.carousel') as HTMLElement;
    if (carousel) {
      carousel.scrollBy({
        left: -carousel.offsetWidth,
        behavior: 'smooth'
      });
    }
  }

  scrollNext(event: Event) {
    const button = event.target as HTMLElement;
    const carousel = button.closest('.relative')?.querySelector('.carousel') as HTMLElement;
    if (carousel) {
      carousel.scrollBy({
        left: carousel.offsetWidth,
        behavior: 'smooth'
      });
    }
  }

  openImage(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
