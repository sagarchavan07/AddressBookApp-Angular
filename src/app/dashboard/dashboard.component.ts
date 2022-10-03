import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddressbookService } from '../service/addressbook.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  contacts: any = [];

  constructor(private router: Router, private service: AddressbookService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllContacts();
  }  

  openForm() {
    this.router.navigate(['form']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  getAllContacts() {
    this.service.getAllContacts().subscribe((response) => {
      this.contacts = response.data;
    });
  }

  deleteContact(contactId: number) {
    this.service.deleteContactById(contactId).subscribe((Response) => {
      this.getAllContacts();
      this.openSnackBar("Deleted Contact Of id "+contactId, "dismiss");
    })
  }

  editContact(personId: number){
    this.router.navigate(["update/"+personId]);
  }
}
