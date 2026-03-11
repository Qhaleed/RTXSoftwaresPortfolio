import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm implements OnInit {
  selectedPlan = signal('');
  fullName = '';
  email = '';
  phone = '';
  company = '';
  preferredDate = '';
  preferredTime = '';
  projectType = '';
  budget = '';
  timeline = '';
  requirements = '';
  submitted = signal(false);

  plans = [
    'Basic Web',
    'Full Stack Application',
    'Business Enterprise',
  ];

  timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['plan']) {
        this.selectedPlan.set(params['plan']);
      }
    });
  }

  get minDate(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }

  onSubmit() {
    const subject = encodeURIComponent(
      `Project Inquiry – ${this.selectedPlan() || 'General'}`
    );
    const body = encodeURIComponent(
      `Hello RTX Softwares,\n\n` +
      `I would like to inquire about your services.\n\n` +
      `--- Contact Details ---\n` +
      `Name: ${this.fullName}\n` +
      `Email: ${this.email}\n` +
      `Phone: ${this.phone || 'N/A'}\n` +
      `Company: ${this.company || 'N/A'}\n\n` +
      `--- Selected Plan ---\n` +
      `${this.selectedPlan() || 'Not specified'}\n\n` +
      `--- Meeting Preference ---\n` +
      `Date: ${this.preferredDate || 'Flexible'}\n` +
      `Time: ${this.preferredTime || 'Flexible'}\n\n` +
      `--- Project Details ---\n` +
      `Type: ${this.projectType || 'N/A'}\n` +
      `Budget Range: ${this.budget || 'N/A'}\n` +
      `Timeline: ${this.timeline || 'N/A'}\n\n` +
      `--- Requirements & Specifications ---\n` +
      `${this.requirements || 'N/A'}\n\n` +
      `Looking forward to hearing from you.\n` +
      `Best regards,\n${this.fullName}`
    );

    window.location.href = `mailto:contact@rtxsoftwares.com?subject=${subject}&body=${body}`;
    this.submitted.set(true);
  }
}
