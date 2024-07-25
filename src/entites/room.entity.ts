import { AutoMap } from '@automapper/classes';
import { Booking } from 'src/entites/booking.entity';
import { Student } from 'src/entites/student.entity';
import { RoomType } from 'src/enums/room.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  roomNumber: number;
  @AutoMap()
  @Column()
  capacity: number;
  @Column({
    type: 'enum',
    enum: RoomType,
  })
  roomType: RoomType;
  @AutoMap()
  @Column()
  available: boolean;
  @AutoMap()
  @Column()
  description: string;
  @AutoMap()
  @Column()
  created_at: Date;
  @AutoMap()
  @Column()
  updated_at: Date;
  @AutoMap()
  @OneToMany(() => Student, (student) => student.room)
  students: Student[];
  @AutoMap()
  @OneToMany(() => Booking, (booking) => booking.room)
  bookings: Booking[];
}
