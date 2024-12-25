import "reflect-metadata";
// import { AppDataSource } from "./data-source.mjs";
// import { FirstNameRepository } from "./repositories/FirstNameRepository.mjs";
// import { LastNameRepository } from "./repositories/LastNameRepository.mjs";
// import { FirstNameSeed } from "./seed/firstNameSeed.mjs";
// import { LastNameSeed } from "./seed/lastNameSeed.mjs";
// import { HelperService } from "./services/HelperService.js";
// import { ProfileContactService } from "./services/ProfileContactService.js";
import { DbFirstNameSeed } from "./seed/first-name-seed.mjs";
// import { MongoClient } from "typeorm";
import { MongoClient as mongoClient } from "mongodb";
import { RandomProfileSingleRepository } from "./repositories/RandomProfileSingleRepository.mjs";
import { DbLastNameSeed } from "./seed/last-name-seed.mjs";


// export const main = async () => {

//     // await AppDataSource.initialize();      

//         // AppDataSource.entityMetadatas.forEach((x) => {
//         //     console.log('Entity Name: ', x.name);
//         // });

//         try {
//             // new FirstNameSeed().Seed();
//             // await new LastNameSeed().Seed();

//             // const total = await new FirstNameRepository().count()
//             // console.log('first name: total: ', total);

//             // const total2 = await new LastNameRepository().count()
//             // console.log('last name: total: ', total2);

//             for (let i = 1; i <= 5000; i++) {
//                 // console.log(`${i}. ${HelperService.getRandomNumber(3000)}`);
//                 // const name = await new ProfileContactService().getRandomFullName();
//                 const profileContactService = new ProfileContactService();
//                 await profileContactService.init();
//                 //console.log(profileContactService._listOfFirstNames);
//                 const name = await profileContactService.getProfile();
//                 console.log(`${i}.  Contact: ${JSON.stringify(name, null, 5)}`)
//             }
            
//             // const name = await new ProfileContactService().getRandomFullName();

//         } catch (error) {
//             console.log(error)
//         }
        
       
    

    
    
// }; 

export const main = async () => {
    let client: mongoClient;
    try {
        client = await new mongoClient("mongodb://localhost:9898").connect();

        const db = new DbFirstNameSeed(new RandomProfileSingleRepository(client, "random-profile", "data"));
        const lastNameSeed = new DbLastNameSeed(new RandomProfileSingleRepository(client, "random-profile", "data"));

        await db.Seed();
        await lastNameSeed.Seed();

        client.close();
    }
    catch(err) {
        console.log(err);
        
    }
    finally {
        console.log('done');
        
    }
}


await main();

