import { SectionList } from "../components.model";

export class Contact {
    sectionList: SectionList[] = [];
    phoneInfo: ContactPhoneInfo[]=[];
    emailInfo: ContactEmailInfo[]=[];
}
export class ContactPhoneInfo {
    url: string;
    phone: string;
    statement: string;
}
export class ContactEmailInfo {
    url: string;
    email: string;
    statement: string;
}