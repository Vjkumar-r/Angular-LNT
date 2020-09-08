import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService} from '../../services/contact.service';
import {Contact} from '../../models/contact';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {
 // 1.Have the form tag equivalent to be created

contactForm: FormGroup;
isSaved: boolean;

  constructor(private contactService: ContactService) {  // dependency injection

  }


  ngOnInit(): void {
    // 2.Formgroup object instantce
    this.contactForm = new FormGroup({
      // 3.Have form field equivalent in TS
      name: new FormControl('vijay', Validators.required),  // 5. work with validators
      phone: new FormControl('9999911111', Validators.required), // refer ts for step 6
      email: new FormControl('ab@cd.com', [Validators.required, Validators.email])
    }); // 3. refer html
  }
  addContactHandler(): void{
    // get entire form object
    console.log(this.contactForm.value);
    this.isSaved = true;
    // 1.connect to service -- refer constructor -- dep injection is connecting service class
    // 2.send the above data to service
    this.contactService.createContact(this.contactForm.value)
    .subscribe((res: Contact) => {
      console.log(res);
    }); // 3.get response from service
    // 4.show the updates in html
  }
}
