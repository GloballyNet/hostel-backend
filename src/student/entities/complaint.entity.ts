import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student.entity';

@Entity()
export class Complaint {
  @PrimaryGeneratedColumn()
  id: number;

  studentId: number;

  @Column()
  status: Boolean; //we may change this to an enum

  @Column()
  description: String;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => Student, (student) => student.complaints)
  student: Student;
}
