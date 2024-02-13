import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roomNumber: number;

    @Column()
    rommType: String //we change this to an enum

    @Column()
    status: Boolean 

    @Column()
    hostelId: number

    @Column()
    description: String;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

}