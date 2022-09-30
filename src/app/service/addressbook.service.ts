import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {
  baseurl: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  addContact(contact: any) { 
    return this.http.post<any>(this.baseurl + "/addressbookapp/add", contact);
  }

  getAllContacts() {
    return this.http.get<any>(this.baseurl + "/addressbookapp/get/all");
  }

  deleteContactById(id:number) {
    return this.http.delete<any>(this.baseurl + "/addressbookapp/delete/"+id);
  }
}
