import "reflect-metadata";
import { AppDataSource } from "./data-source.mjs";
import { FirstNameSeed } from "./seed/firstNameSeed.mjs";


export const main = async () => {

    await AppDataSource.initialize();
      

        AppDataSource.entityMetadatas.forEach((x) => {
            console.log('Entity Name: ', x.name);
        });

        try {
            new FirstNameSeed().Seed();
        } catch (error) {
            console.log(error)
        }
        
       
    

    
    
}; 


await main();

