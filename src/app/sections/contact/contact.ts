import { Component, inject } from '@angular/core';
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

  sent = false;
  /** Validation messages only appear after the visitor has clicked Send. */
  submitted = false;

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue],
  });

  /** 'invalid' | 'valid' | '' — drives border color + icon like the Figma input states */
  state(ctrl: AbstractControl): string {
    if (!this.submitted) return '';
    return ctrl.invalid ? 'invalid' : 'valid';
  }

  togglePrivacy(): void {
    const c = this.form.controls.privacy;
    c.setValue(!c.value);
  }

  // No backend yet: opens the visitor's mail app with the message prefilled.
  submit(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    const { name, email, message } = this.form.getRawValue();
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href =
      `mailto:gerkor1972@gmail.com?subject=${encodeURIComponent('Portfolio contact from ' + name)}&body=${encodeURIComponent(body)}`;
    this.sent = true;
    this.submitted = false;
    this.form.reset({ name: '', email: '', message: '', privacy: false });
  }
}
