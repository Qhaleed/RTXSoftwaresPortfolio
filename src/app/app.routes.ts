import { Routes } from '@angular/router';
import { App } from './app';
import { Pricing } from './pricing/pricing';
import { Pricingpage } from './pages/pricingpage/pricingpage';

export const routes: Routes = [
  { path: '', component: App },       // default route
  { path: 'pricing', component: Pricingpage },
  // { path: '**', redirectTo: '' }
];
