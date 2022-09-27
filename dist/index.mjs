import "reflect-metadata";
import { AppDataSource } from "./data-source.mjs";
// import { FirstNameRepository } from "./repositories/FirstNameRepository.mjs";
// import { LastNameRepository } from "./repositories/LastNameRepository.mjs";
// import { FirstNameSeed } from "./seed/firstNameSeed.mjs";
// import { LastNameSeed } from "./seed/lastNameSeed.mjs";
// import { HelperService } from "./services/HelperService.js";
import { ProfileContactService } from "./services/ProfileContactService.js";
export const main = async () => {
    await AppDataSource.initialize();
    // AppDataSource.entityMetadatas.forEach((x) => {
    //     console.log('Entity Name: ', x.name);
    // });
    try {
        // new FirstNameSeed().Seed();
        // await new LastNameSeed().Seed();
        // const total = await new FirstNameRepository().count()
        // console.log('first name: total: ', total);
        // const total2 = await new LastNameRepository().count()
        // console.log('last name: total: ', total2);
        for (let i = 1; i <= 10; i++) {
            // console.log(`${i}. ${HelperService.getRandomNumber(3000)}`);
            // const name = await new ProfileContactService().getRandomFullName();
            const profileContactService = new ProfileContactService();
            await profileContactService.init();
            //console.log(profileContactService._listOfFirstNames);
            const name = await profileContactService.getProfile();
            console.log(`${i}.  Name: ${JSON.stringify(name, null, 5)}`);
        }
        // const name = await new ProfileContactService().getRandomFullName();
    }
    catch (error) {
        console.log(error);
    }
};
await main();
//# sourceMappingURL=index.mjs.map