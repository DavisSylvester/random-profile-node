import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm"
import { Gender } from "./enums/Gender.mjs";

@Entity()
export class FirstName {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 30,
    })
    @Index({
        unique: true
    })
    name: string;

    @Column({
        type: 'enum',
        enum: Gender,
        default: Gender.MALE
    })
    gender: Gender;

    @Column("boolean", {default: true})
    isActive: boolean = true;
}