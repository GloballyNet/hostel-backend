import { Room } from 'src/entites/room.entity';
import { Student } from 'src/entites/student.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum BookingStatus {
  Pending = 'pending',
  Approved = 'approved',
  Rejected = 'rejected',
  CheckedIn = 'checkedIn',
  CheckedOut = 'checkedOut',
  Cancelled = 'cancelled',
  Expired = 'expired',
  Completed = 'completed',
}

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomId: number;

  @Column()
  studentId: number;

  @Column({
    type: 'enum',
    enum: BookingStatus,
    default: BookingStatus.Pending,
  })
  bookingStatus: BookingStatus;
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
