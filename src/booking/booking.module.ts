import { Module } from '@nestjs/common';
import { Booking } from '../entites/booking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Booking])],
})
export class BookingModule {}
