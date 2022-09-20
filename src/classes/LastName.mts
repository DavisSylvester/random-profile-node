import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LastName {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 30,
    })
    @Index({
        unique: true
    })
    name: string;

    @Column("boolean", {default: true})
    isActive: boolean = true;
}