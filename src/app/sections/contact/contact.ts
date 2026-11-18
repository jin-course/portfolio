import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { TranslationService } from '../../services/translation';
import { LegalService } from '../../services/legal';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  ts = inject(TranslationService);
  legal = inject(LegalService);
  private fb = inject(FormBuilder);

  // Get your free access key at https://web3forms.com/ using gerkor1972@gmail.com
  private readonly web3FormsKey = '7f0dea81-3001-4697-83ec-32a909fd6ce0';

  sending = signal(false);
  sent = signal(false);
  sendError = signal(false);
  /** Validation messages appear after a field loses focus (touched) or on submit. */
  submitted = false;

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue],
  });

  /** 'invalid' | 'valid' | '' — drives border color + icon like the Figma input states */
  state(ctrl: AbstractControl): string {
    if (!ctrl.touched && !this.submitted) return '';
    return ctrl.invalid ? 'invalid' : 'valid';
  }

  togglePrivacy(): void {
    const c = this.form.controls.privacy;
    c.setValue(!c.value);
    c.markAsTouched();
  }

  async submit(): Promise<void> {
    this.submitted = true;
    this.sent.set(false);
    this.sendError.set(false);
    if (this.form.invalid || this.sending()) return;

    this.sending.set(true);
    const { name, email, message } = this.form.getRawValue();

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: this.web3FormsKey,
          name,
          email,
          message,
          subject: `Portfolio contact from ${name}`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message');
      }
      this.sent.set(true);
      this.submitted = false;
      this.form.reset({ name: '', email: '', message: '', privacy: false });
    } catch {
      this.sendError.set(true);
    } finally {
      this.sending.set(false);
    }
  }
}
