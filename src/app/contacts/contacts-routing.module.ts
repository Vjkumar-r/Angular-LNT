import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './components/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { Routes, RouterModule } from '@angular/router';

// configure child routes
const routes: Routes = [

{ path: 'contacts', component: ContactsComponent},
{ path: 'contacts/add', component: AddContactComponent},
{ path: 'contacts/:id', component: ContactDetailsComponent}, // url parameter
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // register child routes
  ],
  exports: [
    RouterModule
  ]
})
export class ContactsRoutingModule { }
