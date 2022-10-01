import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressbookService } from '../service/addressbook.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  contacts: any = [];

  constructor(private router: Router, private service: AddressbookService) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  openForm() {
    this.router.navigate(['form']);
  }

  getAllContacts() {
    this.service.getAllContacts().subscribe((response) => {
      this.contacts = response.data;
    });
  }

  deleteContact(contactId: number) {
    this.service.deleteContactById(contactId).subscribe((Response) => {
      console.log("contact deleted " + Response.data);
      alert("contact deleted of id: " + contactId);
      this.getAllContacts();
    })
  }

  editContact(personId: number){
    this.router.navigate(["update/"+personId]);
  }
}
