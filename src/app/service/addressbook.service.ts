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

  updateContact(contact: any, id: number) {
    return this.http.put<any>(this.baseurl + "/addressbookapp/update/"+id, contact);
  }

  getAllContacts() {
    return this.http.get<any>(this.baseurl + "/addressbookapp/get/all");
  }

  getContactbyId(id: number) {
    return this.http.get<any>(this.baseurl + "/addressbookapp/get/"+id);
  }

  deleteContactById(id:number) {
    return this.http.delete<any>(this.baseurl + "/addressbookapp/delete/"+id);
  }
}
