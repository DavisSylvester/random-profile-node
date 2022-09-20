import { LastName } from "../classes/LastName.mjs";
import { BaseRepository } from "./BaseRepository.mjs";

export class LastNameRepository extends BaseRepository<LastName> {

    constructor() {
        super("LastName")
        
    }
}