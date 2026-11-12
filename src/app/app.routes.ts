import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { Imprint } from './pages/imprint/imprint';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'imprint', component: Imprint },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: '**', redirectTo: '' }
];