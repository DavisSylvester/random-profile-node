// @ts-ignore
import { AppDataSource } from "../data-source.mjs";
import { FirstName } from "../classes/index.mjs"
import { BaseRepository } from "./BaseRepository.mjs";

export class FirstNameRepository extends BaseRepository<FirstName> {

    constructor() {
        super("FirstName");
        
    }
}