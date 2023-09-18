import { CloudinaryService } from '../service/cloudinary.service';
import { PictureEntity } from '../entity/picture.entity';
import { PictureInput } from '../dto/input/picture/picture.input';
export declare class PictureBusiness {
    private cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    upload(pictureInput: PictureInput): Promise<PictureEntity[]>;
}
