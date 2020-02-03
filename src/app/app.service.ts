import { Injectable } from '@angular/core';
import { contacts_file_json } from 'src/environments/environment';

export interface Contact {
    "E-mail Address": string,
    "Related name": string,
    "Home Address 2": string,
    "Anniversary": string,
    "First Name": string,
    "Business Address 2": string,
    "Department": string,
    "Display Name": string,
    "Home State": string,
    "Business Country": string,
    "Home Street": string,
    "Birthday": string,
    "Home Country": string,
    "Pager": string,
    "Categories": string,
    "Home City": string,
    "E-mail 3 Address": string,
    "Home Fax": string,
    "Gender": string,
    "Notes": string,
    "Country Code": string,
    "Job Title": string,
    "Business Address": string,
    "Web Page 2": string,
    "Mobile Phone": string,
    "Organization": string,
    "Home Phone": string,
    "E-mail 2 Address": string,
    "Last Name": string,
    "Nickname": string,
    "Business Fax": string,
    "Home Postal Code": string,
    "Business Phone": string,
    "Business Postal Code": string,
    "Web Page": string,
    "Business City": string,
    "Business State": string
}


@Injectable()
export class Service {
    getContacts() : Contact[] {
        return contacts_file_json;
    }
}
