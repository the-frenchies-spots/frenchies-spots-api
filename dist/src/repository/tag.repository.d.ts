import { TagEntity } from '../entity/tag.entity';
import { PrismaService } from '../service/prisma.service';
import { TagListInput } from '../dto/input/tag/tag-list-input';
import { TagInsertInput } from '../dto/input/tag/tag-insert.input';
import { TagUpdateInput } from '../dto/input/tag/tag-update.input';
export declare class TagRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(filterData?: TagListInput): Promise<TagEntity[]>;
    getById(id: string): Promise<TagEntity>;
    create(data: TagInsertInput): Promise<TagEntity>;
    update(data: TagUpdateInput): Promise<TagEntity>;
    delete(id: string): Promise<boolean>;
}
