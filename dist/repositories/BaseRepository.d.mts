import { DataSource, Repository } from "typeorm";
import { where } from "../classes/types/where.mjs";
import { IRepository } from "../interfaces/IRepository.mjs";
export declare abstract class BaseRepository<T> implements IRepository<T> {
    protected entityType: string;
    protected repository: Repository<T>;
    protected connection: DataSource;
    constructor(entityType: string);
    save(data: T): Promise<T | null>;
    find(id?: number | string | null): Promise<T | T[] | null>;
    get(id?: number | string | null): Promise<T | T[]>;
    getById(id: number | string): Promise<T | null>;
    where(query: where): Promise<T[]>;
    protected getConnection(): Promise<void>;
}
//# sourceMappingURL=BaseRepository.d.mts.map