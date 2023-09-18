import { ProfileEntity } from './profile.entity';
export declare class ContactEntity {
    id: string;
    profile: ProfileEntity;
    profileId: string;
    authorization: boolean;
    isFriend: boolean;
    contact: ProfileEntity;
    contactId: string;
    createdAt: Date;
    updatedAt: Date;
}
