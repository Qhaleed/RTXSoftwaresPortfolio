import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm implements OnInit {
  // Using configuration from the environments file.
  private readonly emailJsConfig = {
    serviceId: environment.emailJsServiceId,
    templateId: environment.emailJsTemplateId,
    publicKey: environment.emailJsPublicKey,
  };

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
  isSubmitting = signal(false);
  submitError = signal('');

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

  private isEmailJsConfigured(): boolean {
    return !Object.values(this.emailJsConfig).some((value) => value.startsWith('YOUR_EMAILJS_'));
  }

  async onSubmit(form: NgForm) {
    if (this.isSubmitting()) {
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set('');

    if (!this.isEmailJsConfigured()) {
      this.submitError.set('Email sending is not configured yet. Add your EmailJS IDs in contact-form.ts.');
      this.isSubmitting.set(false);
      return;
    }

    const compiledMessage = `
--- Contact Details ---
Name: ${this.fullName}
Email: ${this.email}
Phone: ${this.phone || 'N/A'}
Company: ${this.company || 'N/A'}

--- Selected Plan ---
${this.selectedPlan() || 'Not specified'}

--- Meeting Preference ---
Date: ${this.preferredDate || 'Flexible'}
Time: ${this.preferredTime || 'Flexible'}

--- Project Details ---
Type: ${this.projectType || 'N/A'}
Budget Range: ${this.budget || 'N/A'}
Timeline: ${this.timeline || 'N/A'}

--- Requirements & Specifications ---
${this.requirements || 'N/A'}
`.trim();

    const templateParams = {
      subject: `Project Inquiry - ${this.selectedPlan() || 'General'}`,
      name: this.fullName,
      message: compiledMessage,
    };

    try {
      await emailjs.send(
        this.emailJsConfig.serviceId,
        this.emailJsConfig.templateId,
        templateParams,
        {
          publicKey: this.emailJsConfig.publicKey,
        }
      );

      this.submitted.set(true);
      form.resetForm();
      this.selectedPlan.set('');
    } catch {
      this.submitError.set('We could not send your inquiry right now. Please try again in a moment.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
