import { Booking } from 'src/entites/booking.entity';
import { Room } from 'src/entites/room.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Complaint } from './complaint.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  firstName: string;
  @Column({ length: 100 })
  lastName: string;
  @Column()
  age: number;
  @Column({ unique: true })
  email: string;
  @Column()
  dateOfBirth: Date;
  @Column()
  phone: string;
  @Column()
  address: string;
  @Column()
  created_at: Date;
  @Column()
  updated_at: Date;
  @Column()
  @Column({ nullable: true })
  deleted_at: Date;
  @JoinColumn()
  @ManyToOne(() => Room, (room) => room.students)
  room: Room;
  @OneToOne(() => Booking, { nullable: true })
  @JoinColumn()
  booking: Booking;
  @OneToMany(() => Complaint, (complaint) => complaint.student)
  complaints: Complaint[];
  @Column({ default: 'student' })
  role: string;
}
