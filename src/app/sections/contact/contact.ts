import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation';
import { ScrollService } from '../../services/scroll';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  ts = inject(TranslationService);
  scroll = inject(ScrollService);
  private fb = inject(FormBuilder);

  sent = false;

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue],
  });

  /** 'invalid' | 'valid' | '' — drives border color + icon like the Figma input states */
  state(ctrl: AbstractControl): string {
    // Validate on blur (touched), not while the visitor is typing for the first time
    if (!ctrl.touched) return '';
    return ctrl.invalid ? 'invalid' : 'valid';
  }

  togglePrivacy(): void {
    const c = this.form.controls.privacy;
    c.setValue(!c.value);
    c.markAsTouched();
  }

  // No backend yet: opens the visitor's mail app with the message prefilled.
  submit(): void {
    if (this.form.invalid) return;
    const { name, email, message } = this.form.getRawValue();
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href =
      `mailto:hello@iamjin.de?subject=${encodeURIComponent('Portfolio contact from ' + name)}&body=${encodeURIComponent(body)}`;
    this.sent = true;
    this.form.reset({ name: '', email: '', message: '', privacy: false });
  }
}
