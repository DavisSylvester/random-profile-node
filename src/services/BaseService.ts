import { FirstNameRepository } from "../repositories/FirstNameRepository.mjs";
import { LastNameRepository } from "../repositories/LastNameRepository.mjs";
import { HelperService } from "./HelperService.js";

export abstract class Baseservice {

    protected firstNameRepository: FirstNameRepository;
    protected lastNameRepository: LastNameRepository;
    protected helperService: HelperService;

    constructor() {
        this.firstNameRepository = new FirstNameRepository();
        this.lastNameRepository = new LastNameRepository();
        this.helperService = HelperService;
    }
}