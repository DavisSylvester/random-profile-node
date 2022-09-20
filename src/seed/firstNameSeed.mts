import { FirstName, Gender } from "../classes/index.mjs";
import { FirstNameRepository } from "../repositories/FirstNameRepository.mjs";

export class FirstNameSeed {
    
    private repository: FirstNameRepository;

    constructor() {
        this.repository = new FirstNameRepository();
    }

    public async Seed(): Promise<void> {
       
        const names = [
            {name: "Davis", gender: Gender.MALE},
            {name: "Randy", gender: Gender.MALE},
            {name: "Peter", gender: Gender.MALE},
            {name: "Bobby", gender: Gender.MALE},
            {name: "Luke", gender: Gender.MALE},
            {name: "Ted", gender: Gender.MALE},
            {name: "John", gender: Gender.MALE},
            {name: "Ken", gender: Gender.MALE},
            {name: "Wesley", gender: Gender.MALE},
            {name: "Clyde", gender: Gender.MALE},
            {name: "Ramon", gender: Gender.MALE},
            {name: "Collin", gender: Gender.MALE},
            {name: "Ralph", gender: Gender.MALE},
            {name: "Frank", gender: Gender.MALE},
            {name: "Marcos", gender: Gender.MALE},
            {name: "Patrick", gender: Gender.MALE},
            {name: "Ryan", gender: Gender.MALE},
            {name: "Brandon", gender: Gender.MALE},
            {name: "Aaron", gender: Gender.MALE},
            {name: "Gunner", gender: Gender.MALE},
            {name: "Harold", gender: Gender.MALE},
            {name: "Miles", gender: Gender.MALE},
            {name: "Kayson", gender: Gender.MALE},
            {name: "Mitch", gender: Gender.MALE},
            

            {name: "Judy", gender: Gender.FEMALE},
            {name: "Jane", gender: Gender.FEMALE},
            {name: "Angela", gender: Gender.FEMALE},
            {name: "Jennifer", gender: Gender.FEMALE},
            {name: "Ashley", gender: Gender.FEMALE},
            {name: "Shannon", gender: Gender.FEMALE},
            {name: "Sophie", gender: Gender.FEMALE},
            {name: "Desiree", gender: Gender.FEMALE},
            {name: "Camille", gender: Gender.FEMALE},
            {name: "Helen", gender: Gender.FEMALE},
            {name: "Terra", gender: Gender.FEMALE},
            {name: "Andrea", gender: Gender.FEMALE},
            {name: "Chloe", gender: Gender.FEMALE},
            {name: "Kim", gender: Gender.FEMALE},
            {name: "Rebecca", gender: Gender.FEMALE},
            {name: "Samantha", gender: Gender.FEMALE},
            {name: "Amber", gender: Gender.FEMALE},
            {name: "Vanessa", gender: Gender.FEMALE},
            {name: "Rachel", gender: Gender.FEMALE},
            {name: "Megan", gender: Gender.FEMALE},
            {name: "Lily", gender: Gender.FEMALE},
            {name: "Mia", gender: Gender.FEMALE},
            {name: "Jessica", gender: Gender.FEMALE},
            {name: "Emma", gender: Gender.FEMALE},
    
        ];

        try {
            for (let i = 0; i < names.length; i++) {
                const data = new FirstName();
                data.name = names[i]?.name!;
                data.gender = names[i]?.gender!;

                const result = await this.repository.save(data);
                console.log(result);
            }
            } catch (err) {
            console.error(err);
        }
    }
}
