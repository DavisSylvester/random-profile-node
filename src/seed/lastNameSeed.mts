import { LastName } from "../classes/index.mjs";
import { LastNameRepository } from "../repositories/LastNameRepository.mjs";

export class LastNameSeed {
    
    private repository: LastNameRepository;

    constructor() {
        this.repository = new LastNameRepository();
    }

    public async Seed(): Promise<void> {

       const names = [
            "Smith", "Johnson",
            "Williams", "Brown",
            "Jones", "Miller",
            "Davis", "Garcia",
            "Rodriguez", "Wilson",
            "Martinez", "Anderson",
            "Taylor", "Thomas",
            "Hernandez", "Moore",
            "Martin", "Jackson",
            "Thompson", "White",
            "Lopez", "Lee",
            "Gonzalez", "Harris",
            "Clark", "Lewis",
            "Robinson", "Walker",
            "Perez", "Hall",
            "Davis", "Garcia",
            "Young", "Allen",
            "Sanchez", "Wright",
            "King", "Scott",
            "Green", "Baker",
            "Adams", "Nelson",
            "Hill", "Ramirez",
            "Campbell", "Mitchell"
        ];

        try {
            for (let i = 0; i < names.length; i++) {
                const data = new LastName();
                console.log('name: ', names[i]);
                data.name = names[i]!;               

                const result = await this.repository.save(data);
                console.log(result);
            }
            } catch (err) {
            console.error(err);
        }
    }

}