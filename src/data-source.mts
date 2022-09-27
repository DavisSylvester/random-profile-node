import { DataSource } from "typeorm";
import * as dotnet from "dotenv";

dotnet.config();


// import { FirstName } from "./classes/index.mjs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env["DATABASE_HOST"]!,
    port: 5432,
    username: process.env["DATABASE_USERNAME"]!,
    password: process.env["DATABASE_PASSWORD"]!,
    database: process.env["DATABASE_NAME"]!,
    synchronize: false,
    logging: false,
    entities: ["./dist/classes/**/*.mjs"],
    subscribers: [],
    migrations: [],
    
});



