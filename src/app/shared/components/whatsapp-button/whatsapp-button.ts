import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.scss',
})
export class WhatsappButton {
  // Replace with the venue's real WhatsApp number when provided.
  private readonly phoneNumber = '9999999999';

  get whatsappUrl(): string {
    if (!this.phoneNumber) {
      return '';
    }

    return `https://wa.me/${this.phoneNumber}`;
  }
}
