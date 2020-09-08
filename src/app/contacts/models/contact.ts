// interface
export interface IContact{
    id: number;
    name: string;
    email: string;
    phone: string;
}

// class that implements interface
// cmd = ng g cl contacts/models/contact
export class Contact implements IContact {
    id: number;
    name: string;
    email: string;
    phone: string;
}
