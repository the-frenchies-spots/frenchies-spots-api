import { PrismaService } from '../service/prisma.service';
import { ContactEntity } from '../entity/contact.entity';
import { ContactsInput } from '../dto/input/contact/contacts.input';
export declare class ContactRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(profileId: string, contactsInput: ContactsInput): Promise<ContactEntity[]>;
    connectContacts(profileId: string, participantIds: string[]): Promise<boolean>;
}
