import { Module } from '@nestjs/common';
import { Room } from '../entites/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
})
export class RoomModule {}
