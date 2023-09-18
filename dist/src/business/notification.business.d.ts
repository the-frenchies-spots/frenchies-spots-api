import { SendNotifInput } from '../dto/input/notif/send-notif.input';
import { NotificationRepository } from '../repository/notification.repository';
import { NotificationEntity } from '../entity/notification.entity';
export declare class NotificationBusiness {
    private notificationRepository;
    constructor(notificationRepository: NotificationRepository);
    getAll(profileId: any): Promise<NotificationEntity[]>;
    sendNotif(sendNotifInput: SendNotifInput): Promise<NotificationEntity>;
    updateNotifStatus(profileId: string): Promise<boolean>;
}
