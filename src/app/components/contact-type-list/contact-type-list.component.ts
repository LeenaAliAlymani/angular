import { routes } from './../../app.routes';
import { HttpService } from './../../http.service';
import { Component, inject } from '@angular/core';
import { IContactType } from './intrfaces/contactType';
import { MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-type-list',
  standalone: true,
  imports: [MatTableModule , MatButtonModule , RouterLink],
  templateUrl: './contact-type-list.component.html',
  styleUrl: './contact-type-list.component.css'
})
export class ContactTypeListComponent {

  router = inject(Router);
  ContactTypeList: IContactType[] = [];

  httpService = inject(HttpService);

  
displayedColumns: string[] = ['id', 'name', 'modifiedDate' , 'action'];

ngOnInit() {
    this.getContactTypeFromServer();
  }

  getContactTypeFromServer(){
    this.httpService.getAllContactTypes().subscribe(result => {
      this.ContactTypeList = result;
      console.log(this.ContactTypeList);
    });
  }
  edit(id : number){
    console.log(id);
    this.router.navigateByUrl('/ContactType/'+id)
   
  }
  delete(id : number){
    this.httpService.deleteContactType(id).subscribe(()=>{
      console.log("deleted");
       this.ContactTypeList=this.ContactTypeList.filter(x=>x.contactTypeId!=id);
      this.getContactTypeFromServer();
    });
  }

}
