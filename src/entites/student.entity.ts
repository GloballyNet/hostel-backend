import { Booking } from 'src/entites/booking.entity';
import { Room } from 'src/entites/room.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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
  dateOfBirth: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column({default:new Date()})
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Room, (room) => room.students)
  room: Room;

  @OneToOne(() => Booking, { nullable: true })
  @JoinColumn()
  booking: Booking;

  @OneToMany(() => Complaint, (complaint) => complaint.student)
  complaints: Complaint[];
}
