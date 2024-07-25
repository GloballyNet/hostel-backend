import { Mapper, createMap } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Room } from 'src/entites/room.entity';
import { CreateRoomDto, RoomResponseDto } from './room.dto';

export class RoomProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, Room, RoomResponseDto);
      createMap(mapper, CreateRoomDto, Room);
    };
  }
}
