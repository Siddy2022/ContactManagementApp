import { Component } from '@angular/core';
import { Contact, Service } from './app.service';


@Component({
    selector: 'demo-app',
    providers: [ Service ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    preserveWhitespaces: true
})
export class AppComponent {
    contacts: Contact[];
    selectedContact:Contact;
    copySelectedContact:Contact;

    constructor(service: Service) {
        this.contacts = service.getContacts();
    }

    contactClicked(contact){
        this.selectedContact = contact;
    }

    getKeys(){
        return Object.keys(this.selectedContact);
    }

    updateContactKey(key,value){
        this.copySelectedContact[key] = value;
    }

    assignCopy(){
        this.copySelectedContact = {...this.selectedContact};
    }

    saveChanges(){
        this.selectedContact = {...this.copySelectedContact};
    }
}

export class AppModule { }

