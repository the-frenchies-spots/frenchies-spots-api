import { UploadApiResponse } from 'cloudinary';
export declare class CloudinaryService {
    uploadImage(files: string[], folder: string): Promise<UploadApiResponse[]>;
    deleteImage(publicId: string): Promise<void>;
}
