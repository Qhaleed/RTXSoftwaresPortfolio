import { Component } from '@angular/core';
import { HeroText } from '../hero-text/hero-text';
import { BackgroundVideo } from "../background-video/background-video";

@Component({
  selector: 'app-hero',
  imports: [HeroText, BackgroundVideo],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
