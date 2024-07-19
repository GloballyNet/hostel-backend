import { Booking } from 'src/entites/booking.entity';
import { Student } from 'src/entites/student.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum RoomType {
  SINGLE = 'SINGLE',
  DOUBLE = 'DOUBLE',
  SUITE = 'SUITE',
}

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomNumber: number;

  @Column()
  capacity: number;

  @Column({
    type: 'enum',
    enum: RoomType,
  })
  roomType: RoomType;

  @Column()
  available: boolean;

  @Column()
  description: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => Student, (student) => student.room)
  students: Student[];

  @OneToMany(() => Booking, (booking) => booking.room)
  bookings: Booking[];
}
