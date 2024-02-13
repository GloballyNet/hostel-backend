import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Booking{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roomId: number;

    @Column()
    studentId: number

    @Column()
    bookingStatus: string //we change this to an enum    

    @Column()
    checkInDate: Date

    @Column()
    checkOutDate: Date;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

}