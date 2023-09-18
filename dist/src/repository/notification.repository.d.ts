import { PrismaService } from '../service/prisma.service';
import { NotificationEntity } from '../entity/notification.entity';
import { SendNotifInput } from '../dto/input/notif/send-notif.input';
export declare class NotificationRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(profileId: string): Promise<NotificationEntity[]>;
    sendNotif(sendNotifInput: SendNotifInput): Promise<NotificationEntity>;
    updateNotifStatus(profileId: string): Promise<boolean>;
}
