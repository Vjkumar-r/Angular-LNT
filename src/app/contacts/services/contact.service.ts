import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  REST_API_URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  // create
  createContact(contactData: Contact): any{// 1. get data from component
    console.log(contactData);
    // 2. send data to rest api
    // 2.1 rest api url?        https://jsonplaceholder.typicode.com/users
    // 2.2 http method?         post
    // 2.3 rest api client?     httpclient
    return this.http.post(this.REST_API_URL, contactData)
    .pipe(map((res: Contact) => {
      console.log(res);
      return res;
    }));
   // 3. get response from rest api
   // 4. send response to component

  }

  // read
  getContacts(): Observable<Contact[]> { // 1. get the request from component
    console.log('Inside getContacts');
  // 2. send to rest api
    return this.http.get(this.REST_API_URL)
  .pipe(map((res: any) => {
    console.log(res);
    return res;
  }));
  // 3. get response from api
  // 4. send to component
  }

  // get contact details
  getContactById(id: string): any{
    console.log(id);
    const CONTACT_DETAIL_URL = `${this.REST_API_URL}/${id}`; // this.REST_API_URL + '/' + id;
    return this.http.get(CONTACT_DETAIL_URL)
    .pipe(map((res: any) => {
      console.log(res);
      return res;
  }));

}
updateContact(updatableContactData: Contact): Observable<Contact>{
  console.log(updatableContactData);
  const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${updatableContactData.id}`;
  return this.http.put(CONTACT_DETAILS_URL, updatableContactData)
    .pipe(map((res: Contact) => {
      console.log(res);
      return res;
    }));
  }
}
