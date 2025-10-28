import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  title: string;
  images: string[];
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
      images: ['assets/adzuChat1.png', 'assets/adzuChat2.png', 'assets/adzuChat1.png']
    },
    {
      title: 'Ateneo Forum',
      images: ['assets/ateneoForum1.png', 'assets/ateneoForum2.png', 'assets/ateneoForum3.png']
    },
    {
      title: 'Boost Buddy',
      images: ['assets/boostBuddy1.png', 'assets/boostBuddy2.png', 'assets/boostBuddy1.png']
    },
    {
      title: 'Faculty',
      images: ['assets/faculty1.png', 'assets/faculty2.png', 'assets/faculty1.png']
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
