import { MongoClient } from "mongodb";
import { MongoRepository } from "./MongoRepository.mjs";


export class RandomProfileSingleRepository extends MongoRepository<any> {

    constructor(
        _mongo: MongoClient,
        _databaseName: string = process.env["MONGO_DATABASE_NAME"] || "",
        _collectionName: string) {
        super(_mongo, _databaseName, _collectionName);
    }

    
}