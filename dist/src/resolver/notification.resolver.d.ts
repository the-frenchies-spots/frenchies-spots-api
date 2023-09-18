import { NotificationEntity } from '../entity/notification.entity';
import { NotificationBusiness } from '../business/notification.business';
export declare class NotificationResolver {
    private readonly notifBusiness;
    constructor(notifBusiness: NotificationBusiness);
    notifications(profileId: string): Promise<NotificationEntity[]>;
    updateNotifStatus(profileId: string): Promise<boolean>;
}
