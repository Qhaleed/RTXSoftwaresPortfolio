import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Pricingpage } from './pages/pricingpage/pricingpage';
import { Contactpage } from './pages/contactpage/contactpage';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'pricing', component: Pricingpage },
  { path: 'contact', component: Contactpage },
  // { path: '**', redirectTo: '' }
];
