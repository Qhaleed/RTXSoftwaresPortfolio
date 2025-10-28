import { Component, AfterViewInit } from '@angular/core';
import { createTimeline, stagger, splitText } from 'animejs';

@Component({
  selector: 'app-hero-text',
  imports: [],
  templateUrl: './hero-text.html',
  styleUrl: './hero-text.css',
})
export class HeroText implements AfterViewInit {
  ngAfterViewInit(): void {
    const { words, chars } = splitText('p', {
      words: { wrap: 'clip' },
      chars: true,
    });

    createTimeline({
      loop: true,
      defaults: { ease: 'inOut(5)', duration: 1650 }
    })
      .add(chars, {
        y: [($el: any) => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
      }, stagger(150, { from: 'random' }))
      .add(words, {
        y: ($el: any) => +$el.dataset.line % 2 ? '100%' : '-100%',
      }, stagger(500, { from: 'random' }))
      .init();
  }
}
