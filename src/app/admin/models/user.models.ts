export class User {
    token?: string;
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    sessionId?: string;
    approved: boolean;
    registrationDate: number;
    approvalDate?: number;
    approvedBy?: string;
    role?: Role;
    billing_shipping_same?: boolean = false; 
    shipping_address?: CustomerAddress = {...new CustomerAddress()};
    billing_address?: CustomerAddress = {...new CustomerAddress()};
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    dob?: Date;
}

export enum Role {
  AGENT="AGENT",
  ADMIN="ADMIN",
  PORTAL_ADMIN="PORTAL_ADMIN"
}

export class CustomerAddress {
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

