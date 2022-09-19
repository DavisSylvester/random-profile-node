import { DataSource } from "typeorm";
import { FirstName } from "./classes/FirstName";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env["DATABASE_HOST"]!,
    port: 5432,
    username: process.env["DATABASE_USERNAME"]!,
    password: process.env["DATABASE_PASSWORD"]!,
    database: process.env["DATABASE_DATABASE"]!,
    synchronize: true,
    logging: true,
    entities: [FirstName],
    subscribers: [],
    migrations: [],
});
