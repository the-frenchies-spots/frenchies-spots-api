import { TagEntity } from '../entity/tag.entity';
import { TagBusiness } from '../business/tag.business';
import { TagListInput } from '../dto/input/tag/tag-list-input';
import { TagInsertInput } from '../dto/input/tag/tag-insert.input';
import { TagUpdateInput } from '../dto/input/tag/tag-update.input';
import { DeleteResponse } from '../dto/response/delete.response';
export declare class TagResolver {
    private readonly tagBusiness;
    constructor(tagBusiness: TagBusiness);
    tags(tagListInput: TagListInput): Promise<TagEntity[]>;
    tagByPk(id: string): Promise<TagEntity>;
    insertTag(tagInsertInput: TagInsertInput): Promise<TagEntity>;
    updateTag(tagUpdateInput: TagUpdateInput): Promise<TagEntity>;
    deleteTag(id: string): Promise<DeleteResponse>;
}
