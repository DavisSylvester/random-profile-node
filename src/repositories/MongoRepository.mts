import { Collection, Db, MongoClient, OptionalUnlessRequiredId } from "mongodb";

export abstract class MongoRepository<T extends new (...args: any[]) => any> {

    protected entityName: string;
    protected database: Db;
    protected collection: Collection<T>;
    
    constructor(
        private _mongo: MongoClient, 
        private databaseName: string = process.env["MONGO_DATABASE_NAME"] || "",
        private collectionName: string) {   
            
            if (!this.databaseName) {
                throw new Error("MONGO_DATABASE_NAME is required in your .env file");
            }
            this.database = this._mongo.db(this.databaseName);
            this.collection = this.database.collection(this.collectionName);

    }

    public async save(data: T): Promise<T | null> {

        const result = await this.collection.insertOne(data as OptionalUnlessRequiredId<T>);
        
        if (!result.acknowledged) {
            return null;
        }
        
        return data;
    }
    
    public async get(): Promise<T | T[] | null> {

        const result = await this.collection.find().toArray();

        return result as T[];
    }

    public async getById(id: string): Promise<T | null> {
        
        const byGetByIdOption: any = {
            Id: id
        };

        const result = await this.collection.findOne(byGetByIdOption);

        return result as T;
    }


}