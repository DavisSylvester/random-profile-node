import { AppDataSource } from "../data-source.mjs";
export class BaseRepository {
    entityType;
    // @ts-ignore
    repository;
    connection = AppDataSource;
    constructor(entityType) {
        this.entityType = entityType;
        // @ts-ignore
        this.repository = this.connection.getRepository(entityType);
    }
    async save(data) {
        try {
            await this.getConnection();
            let result = null;
            // @ts-ignore
            result = await this.repository.save(data);
            return result;
        }
        catch (error) {
            console.log(error);
        }
        return null;
    }
    async find(id = null) {
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
    async get(id = null) {
        await this.getConnection();
        let result = (id) ? await this.find(id) : await this.find();
        return result;
    }
    async getById(id) {
        await this.getConnection();
        let result = null;
        // @ts-ignore
        result = await this.repository.find(id);
        return result;
    }
    // public async update(data: T, updateFields: {} = null): Promise<T | M> {
    // 	throw new Error("Not implemented");
    // }
    async where(query) {
        await this.getConnection();
        let result = null;
        // @ts-ignore
        result = await this.repository.find(query);
        return result;
    }
    async getConnection() {
        if (this.connection) {
            return;
        }
        this.connection = await AppDataSource;
    }
}
//# sourceMappingURL=BaseRepository.mjs.map