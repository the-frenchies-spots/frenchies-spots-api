import * as mongoose from 'mongoose';
import { Spot } from '../schema/spot.shema';
import { GeoPointInput } from '../dto/input/geo-point/geo-point-input';
import { ProfileEntity } from '../entity/profile.entity';
export declare class GeospatialService {
    private spotModel;
    private profileModel;
    constructor(spotModel: mongoose.Model<Spot>, profileModel: mongoose.Model<ProfileEntity>);
    searchPeopleArround(point: GeoPointInput): Promise<{
        _doc: Omit<ProfileEntity, 'id'> & {
            _id: string;
        };
    }[]>;
    searchArround(point: GeoPointInput): Promise<{
        _id: string;
    }[]>;
}
