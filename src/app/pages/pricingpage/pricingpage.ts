import { Component } from '@angular/core';
import { Pricing } from "../../pricing/pricing";
import { Navbar } from "../../navbar/navbar";
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-pricingpage',
  imports: [Pricing, Navbar, Footer],
  templateUrl: './pricingpage.html',
  styleUrl: './pricingpage.css',
})
export class Pricingpage {

}
