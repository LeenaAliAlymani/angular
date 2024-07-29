import { HttpService } from './../../http.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { IContactType } from '../contact-type-list/intrfaces/contactType';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-type-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-type-form.component.html',
  styleUrl: './contact-type-form.component.css'
})
export class ContactTypeFormComponent {

  formBuilder = inject(FormBuilder);

  HttpService = inject(HttpService);

  router = inject(Router);

  route = inject(ActivatedRoute);

  contactTypeForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    contactTypeId: 0,
    modifiedDate: [''],
  });

  ContactTypeID!: number;
  isEdit = false;
  ngOnInit() {
    this.ContactTypeID = this.route.snapshot.params['id'];
    if (this.ContactTypeID) {
      this.isEdit = true;
      this.HttpService.getContactType(this.ContactTypeID).subscribe(result => {
        console.log(result);
        this.contactTypeForm.patchValue(result);
      })
    }
  }
  save() {
    // console.log(this.contactTypeForm.value);
    // const contactType: IContactType = {
    //   name: this.contactTypeForm.value.name!,
    //   contactTypeId: this.contactTypeForm.value.contactTypeId!,
    //   //modifiedDate: '',
    //   // businessEntityContacts: []
    // };
    if (this.isEdit) {

      console.log(this.contactTypeForm.value);
      const contactType: IContactType = {
        name: this.contactTypeForm.value.name!,
        contactTypeId: this.contactTypeForm.value.contactTypeId!,
        //modifiedDate: '',
        // businessEntityContacts: []
      };


      // this.HttpService.updateContactType(this.ContactTypeID, contactType).subscribe(() => {
      this.HttpService.updateContactType(contactType).subscribe(() => {
        console.log("success update");
        this.router.navigateByUrl("/");


      });


      // this.HttpService.deleteContactType(this.ContactTypeID).subscribe(()=>{
      //   console.log("the old record is deleted");

      // });




    } else {

      console.log(this.contactTypeForm.value);
      const contactType: IContactType = {
        name: this.contactTypeForm.value.name!,
        // contactTypeId: this.contactTypeForm.value.contactTypeId!,
        //modifiedDate: '',
        // businessEntityContacts: []
      };



      this.HttpService.crateContactType(contactType).subscribe(() => {
        console.log("success crateition");
        this.router.navigateByUrl("/");
      });
    }
  }


}
