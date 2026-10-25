import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  submitted = false;
  formNotice = '';

  readonly minEventDate = this.getTodayDate();

  readonly enquiryForm = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80),
      ],
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?:\+91[\s-]?)?[6-9]\d{9}$/),
      ],
    ],
    eventType: ['', Validators.required],
    eventDate: [''],
    guestCount: [''],
    message: ['', Validators.maxLength(1000)],
  });

  private getTodayDate(): string {
    const today = new Date();

    today.setMinutes(
      today.getMinutes() - today.getTimezoneOffset(),
    );

    return today.toISOString().slice(0, 10);
  }

  onSubmit(): void {
    this.submitted = true;
    this.formNotice = '';

    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }

    // The form endpoint has not been connected yet.
    // Do not show a false success message.
    this.formNotice = 'Your details passed validation, but the enquiry service is not connected yet. No enquiry has been sent.';
  }
}
