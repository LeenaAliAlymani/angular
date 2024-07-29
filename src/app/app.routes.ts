import { Routes } from '@angular/router';
import { ContactTypeListComponent } from './components/contact-type-list/contact-type-list.component';
import { ContactTypeFormComponent } from './components/contact-type-form/contact-type-form.component';

export const routes: Routes = [
  {
    path: '',
    component: ContactTypeListComponent,
  },
  {
    path: 'ContactType-list',
    component: ContactTypeListComponent,
  },
  {
    path: 'create-ContactType',
    component: ContactTypeFormComponent,
  },
  {
    path: 'ContactType/:id',
    component: ContactTypeFormComponent,
  },
];
