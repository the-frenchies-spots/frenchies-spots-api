import { ProfileEntity } from './profile.entity';
export declare class NotificationEntity {
    id: string;
    profile: ProfileEntity;
    profileId: string;
    isRead: boolean;
    content: Record<string, unknown>;
    type: string;
}
