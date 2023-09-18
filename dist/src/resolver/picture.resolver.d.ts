import { PictureEntity } from '../entity/picture.entity';
import { PictureBusiness } from '../business/picture.business';
import { PictureInput } from '../dto/input/picture/picture.input';
export declare class PictureResolver {
    private readonly pictureBusiness;
    constructor(pictureBusiness: PictureBusiness);
    upload(pictureInput: PictureInput): Promise<PictureEntity[]>;
}
