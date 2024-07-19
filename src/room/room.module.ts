import { Module } from '@nestjs/common';
import { Room } from '../entites/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomService } from './room.service';
import { RoomRepository } from './room.repository';
import { RoomController } from './room.controller';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Room, RoomRepository])],
  providers: [
    RoomService,
    {
      provide: 'RoomRepository',
      useFactory: (dataSource: DataSource) => new RoomRepository(dataSource),
      inject: [DataSource],
    },
  ],
  controllers: [RoomController],
  exports: [],
})
export class RoomModule {}
