import { Inject, Injectable } from '@nestjs/common';
import { CreateRoomDto } from './room.dto';
import { RoomRepository } from './room.repository';
import { Room } from 'src/entites/room.entity';

@Injectable()
export class RoomService {
  constructor(
    @Inject('RoomRepository')
    private readonly roomRepository: RoomRepository,
  ) {}

  async createRoom(createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomRepository.createRoom(createRoomDto);
  }

  async getRooms(): Promise<Room[]> {
    return this.roomRepository.getRooms();
  }

  async getRoomById(id: number): Promise<Room> {
    return this.roomRepository.getRoomById(id);
  }

  async updateRoom(id: number, createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomRepository.updateRoom(id, createRoomDto);
  }
}
