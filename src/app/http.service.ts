import { ContactTypeFormComponent } from './components/contact-type-form/contact-type-form.component';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IContactType } from './components/contact-type-list/intrfaces/contactType';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = "https://localhost:7252";
  http = inject(HttpClient);
  constructor() { }

  getAllContactTypes() {
    return this.http.get<IContactType[]>(this.apiUrl + "/api/ContactType");
  }
  crateContactType(contactType : IContactType){
    return this.http.post(this.apiUrl+"/api/ContactType",contactType);
    
  }
  getContactType(ContactTypeID : Number) {
    return this.http.get<IContactType>(this.apiUrl + '/api/ContactType/'+ContactTypeID);
  }
  // updateContactType(ContactTypeID : Number , contactType : IContactType) {
  //   return this.http.put<IContactType>(this.apiUrl + '/api/ContactType/'+ContactTypeID, contactType);
  // }

  updateContactType(  contactType : IContactType) {
    return this.http.put<IContactType>(this.apiUrl + "/api/ContactType", contactType);
  }
  
  deleteContactType(ContactTypeID : Number) {
    return this.http.delete<IContactType>(this.apiUrl + "/api/ContactType/"+ContactTypeID);
  }
}
