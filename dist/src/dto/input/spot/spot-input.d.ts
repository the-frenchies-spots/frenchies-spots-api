import { SpotPictureInput } from '../spot-picture/spot-picture-input';
import { CategoriesSpotAndTag } from '../../../enum/categories-spot-and-tag.enum';
import { LocationEntity } from '../../../entity/location.entity';
export declare class SpotInput {
    id?: string;
    name: string;
    description: string;
    isCanPark: boolean;
    isHidden: boolean;
    category: CategoriesSpotAndTag;
    location: LocationEntity;
    region: string;
    address: string;
    pictures?: SpotPictureInput[];
    tags?: string[] | null;
}
