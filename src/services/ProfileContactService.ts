// import { FirstName } from "../classes/index.mjs";
import { FirstName } from "../classes/FirstName.mjs";
import { LastName } from "../classes/LastName.mjs";
import { RandomProfileSingleRepository } from "../repositories/RandomProfileSingleRepository.mjs";
import { Baseservice } from "./BaseService.js";
import { HelperService } from "./HelperService.js";

export class ProfileContactService extends Baseservice {

    _listOfFirstNames: FirstName[];
    _listOfLastNames: LastName[];

    get listOfFirstNames() {

       return this._listOfFirstNames;
    }

    get listOfLastNames() {

        return this._listOfLastNames;
    }

    constructor(private randomProfileRepository: RandomProfileSingleRepository) {
        super();

    }


    public async init() {

        this._listOfFirstNames = await this.randomProfileRepository.getListOfFirstNames() as FirstName[];
        this._listOfLastNames = await this.randomProfileRepository.getListOfLastNames() as LastName[];
    }

    public async getRandomFullName() {

        // const totalFirstNames = await this.firstNameRepository.count();
        // const totalLastNames = await this.lastNameRepository.count();

        const allFirstNames = await this.firstNameRepository.get();
        const allLastNames = await this.lastNameRepository.get();


        //@ts-ignore
        const firstName = allFirstNames[HelperService.getRandomNumber(allFirstNames.length)];

        //@ts-ignore
        const lastName = allLastNames[HelperService.getRandomNumber(allLastNames.length)];

        return `${firstName.name} ${lastName.name}`;
    }

    public getFirstName() {
        const index = HelperService.randomNumber({ min: 0, max: this.listOfFirstNames!.length, total: 1 });

        const firstName: string = this.listOfFirstNames![index[0] as number]?.name || this.getFirstName();

         return firstName;
    };

    public getLastName() {
        const index = HelperService.randomNumber({ min: 0, max: this.listOfLastNames.length, total: 1 });
        
        const lastName: string = this._listOfLastNames[index[0] as number]?.name || this.getLastName();

        return lastName;
    };

    public getPhoneNumber(formattted: boolean = false) {
        const digits = HelperService.randomNumber({ min: 0, max: 9, total: 10 });

        if (digits[0] === 0 || digits[0] === 1) {
            const retry = HelperService.randomNumber({ min: 1, max: 9, total: 1 });
            digits[0] = retry[0]!;
        }


        return (!formattted) ?
            `${digits[0]}${digits[1]}${digits[2]}${digits[3]}${digits[4]}${digits[5]}${digits[6]}${digits[7]}${digits[8]}${digits[9]}` :
            `(${digits[0]}${digits[1]}${digits[2]}) ${digits[3]}${digits[4]}${digits[5]}-${digits[6]}${digits[7]}${digits[8]}${digits[9]}`;
    };

    public getEmail(firstName: string, lastName: string, domain: string = 'local.priv') {
        return `${firstName}.${lastName}@${domain}`;
    };

    public getProfile(phoneNumberFormatted: boolean = false, domain: string = 'local.priv') {

        const firstName = this.getFirstName();
        const lastName = this.getLastName();
        const phone = this.getPhoneNumber(phoneNumberFormatted);
        const email = this.getEmail(firstName!, lastName!, domain);

        if (!firstName || !lastName) {
            throw new Error('Error getting Name');
        }
        
        return {
            firstName,
            lastName,
            phone,
            email,
            fullName: `${firstName} ${lastName}`
        };
    };


}