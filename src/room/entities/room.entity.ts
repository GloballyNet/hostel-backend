import { Booking } from 'src/booking/entities/booking.entity';
import { Student } from 'src/student/entities/student.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomNumber: number;

  @Column()
  rommType: String; //we change this to an enum

  @Column()
  status: Boolean;

  @Column()
  hostelId: number;

  @Column()
  description: String;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => Student, (student) => student.room)
  students: Student[];

  @OneToMany(() => Booking, (booking) => booking.room)
  bookings: Booking[];
}
