import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    // host: process.env.DATABASE_HOST,
    port: 5432,
    // username: process.env.DATABASE_USERNAME,
    // password: process.env.DATABASE_USERNAME,
    // database: process.env.DATABASE_USERNAME,
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
});
