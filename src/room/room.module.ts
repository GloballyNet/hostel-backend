import { Module } from '@nestjs/common';
import { Room } from '../entites/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { RoomService } from './room.service';
import { RoomRepository } from './room.repository';
import { RoomController } from './room.controller';
import { DataSource } from 'typeorm';
import { RoomProfile } from './room.profile';

@Module({
  imports: [
    TypeOrmModule.forFeature([Room, RoomRepository]),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  providers: [
    RoomService,
    RoomProfile,
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
