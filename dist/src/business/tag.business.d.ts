import { TagRepository } from '../repository/tag.repository';
import { TagListInput } from '../dto/input/tag/tag-list-input';
import { TagEntity } from '../entity/tag.entity';
import { TagInsertInput } from '../dto/input/tag/tag-insert.input';
import { TagUpdateInput } from '../dto/input/tag/tag-update.input';
import { DeleteResponse } from '../dto/response/delete.response';
export declare class TagBusiness {
    private tagRepository;
    constructor(tagRepository: TagRepository);
    getAll(tagListInput: TagListInput): Promise<TagEntity[]>;
    getById(id: string): Promise<TagEntity>;
    insert(tagInsertInput: TagInsertInput): Promise<TagEntity>;
    update(tagUpdateInput: TagUpdateInput): Promise<TagEntity>;
    delete(id: string): Promise<DeleteResponse>;
}
