import { Room } from 'src/room/entities/room.entity';
import { Student } from 'src/student/entities/student.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomId: number;

  @Column()
  studentId: number;

  @Column()
  bookingStatus: string; //we change this to an enum (pending, approved, rejected, checkedIn, checkedOut, cancelled, expired, completed, etc. )

  @Column()
  checkInDate: Date;

  @Column()
  checkOutDate: Date;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToOne(() => Student, (student) => student.booking)
  @JoinColumn()
  student: Student;

  @ManyToOne(() => Room, (room) => room.bookings)
  room: Room;
}
