import { Component, Input, OnInit } from '@angular/core';
import { SectionList } from '../../components.model';
import { Contact, ContactEmailInfo, ContactPhoneInfo } from '../contact.model';

@Component({
  selector: 'app-contact-one',
  templateUrl: './contact-one.component.html'
})
export class ContactOneComponent implements OnInit {
  @Input('view') view: string = "preview";

  contact: Contact = new Contact();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.contact.sectionList.push(sectionList);
    
    let phone: ContactPhoneInfo = new ContactPhoneInfo();
    phone.url = "#";
    phone.phone = "(123)-456-7890";
    phone.statement = "the statement under the phone number";
    this.contact.phoneInfo.push(phone);

    let email: ContactEmailInfo = new ContactEmailInfo();
    email.url = "#";
    email.email = "email@ someaddress.com";
    email.statement = "the statement under the email";
    this.contact.emailInfo.push(email);
  }

  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }

  



}
