import { ContactEntity } from '../entity/contact.entity';
import { ContactBusiness } from '../business/contact.business';
import { ContactsInput } from '../dto/input/contact/contacts.input';
export declare class ContactResolver {
    private readonly contactBusiness;
    constructor(contactBusiness: ContactBusiness);
    contacts(contactsInput: ContactsInput, profileId: string): Promise<ContactEntity[]>;
}
