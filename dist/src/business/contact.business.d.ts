import { ContactsInput } from '../dto/input/contact/contacts.input';
import { ContactEntity } from '../entity/contact.entity';
import { ContactRepository } from '../repository/contact.repository';
export declare class ContactBusiness {
    private contactRepository;
    constructor(contactRepository: ContactRepository);
    getAll(profileId: string, contactsInput: ContactsInput): Promise<ContactEntity[]>;
}
