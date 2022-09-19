import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Gender } from "./enums/Gender";

@Entity()
export class FirstName {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 30,
    })
    name: string;

    @Column({
        type: 'enum',
        enum: Gender,
        default: Gender.MALE
    })
    gender: Gender;

    @Column("boolean")
    isActive: boolean;
}