import { DataSource, Repository } from "typeorm";
import { where } from "../classes/types/where.mjs";
import { AppDataSource } from "../data-source.mjs";
import { IRepository } from "../interfaces/IRepository.mjs";

export abstract class BaseRepository<T> implements IRepository<T> {

    // @ts-ignore
    protected repository: Repository<T>;
    protected connection: DataSource = AppDataSource;

    constructor(protected entityType: string) {
        // @ts-ignore
        this.repository = this.connection.getRepository<T>(entityType);
    }

    public async save(data: T): Promise<T | null> {

        try {
            await this.getConnection();

            let result: T | null = null;
            // @ts-ignore
            result = await this.repository.save(data);
            return result;
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    public async find(id: number | string | null = null): Promise<T | T[] | null> {
        await this.getConnection();

        let result = null;

        result = id
            ? await this.repository.findOne({
                where: {
                    // @ts-ignore
                    id: id
                },
            })
            : await this.repository.find();

        return result;
    }

    public async get(id: number | string | null = null): Promise<T | T[]> {
        await this.getConnection();

        let result = (id) ? await this.find(id) as T : await this.find() as T[];

        return result;
    }

    public async getById(id: number | string): Promise<T | null> {
        await this.getConnection();

        let result = null;

        // @ts-ignore
        result = await this.repository.find(id) as T;
        return result;
    }

    // public async update(data: T, updateFields: {} = null): Promise<T | M> {
    // 	throw new Error("Not implemented");
    // }

    public async where(query: where): Promise<T[]> {
        await this.getConnection();

        let result = null;

        // @ts-ignore
        result = await this.repository.find(query);
        return result;
    }

    public async count(): Promise<number> {

        const result = await this.repository.count();

        // const total = await this.repository.query(`Select count(*) from ${this.repository.metadata.tableName}`);
        
        // const result = parseInt(total[0].count);
        return result;
    }

    protected async getConnection() {
        if (this.connection) {
            return;
        }

        this.connection = await AppDataSource;
    }
}
