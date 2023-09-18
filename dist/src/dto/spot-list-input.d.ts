import { OrderByEnum } from './order-by.enum';
import { SpotEntity } from '../entity/spot.entity';
export declare class SpotListInput extends SpotEntity {
    skip: number;
    take: number;
    tagListId: string[];
    searchValue: string;
    orderBy: OrderByEnum;
}
