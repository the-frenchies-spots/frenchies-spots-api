import { CategoriesSpotAndTag } from '@prisma/client';
import { GeoPointInput } from '../geo-point/geo-point-input';
export declare class SpotsInput {
    id: string;
    profileId: string;
    orderBy: 'asc' | 'desc';
    isCanPark: boolean;
    isHidden: boolean;
    category: CategoriesSpotAndTag;
    searchValue: string;
    tagListId: string[];
    region: string;
    address: string;
    skip: number;
    point: GeoPointInput;
    take: number;
}
