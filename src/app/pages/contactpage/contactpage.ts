import { Component } from '@angular/core';
import { ContactForm } from '../../contact-form/contact-form';
import { Navbar } from '../../navbar/navbar';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-contactpage',
  imports: [ContactForm, Navbar, Footer],
  templateUrl: './contactpage.html',
  styleUrl: './contactpage.css',
})
export class Contactpage { }
