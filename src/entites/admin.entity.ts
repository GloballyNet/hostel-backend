import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  firstName: string;
  @Column({ length: 100 })
  lastName: string;
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
  deleted_at: Date;
  @Column({ default: 'admin' })
  role: string;
}
