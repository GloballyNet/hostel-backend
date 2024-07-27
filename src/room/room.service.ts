import { Inject, Injectable, Param } from '@nestjs/common';
import { CreateRoomDto, RoomResponseDto } from './room.dto';
import { RoomRepository } from './room.repository';
import { Room } from 'src/entites/room.entity';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { ApiParam } from '@nestjs/swagger';

@Injectable()
export class RoomService {
  constructor(
    @Inject('RoomRepository')
    private readonly roomRepository: RoomRepository,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  async createRoom(createRoomDto: CreateRoomDto): Promise<RoomResponseDto> {
    const room = await this.roomRepository.createRoom(createRoomDto);
    return this.mapper.map(room, Room, RoomResponseDto);
  }

  async getRooms(): Promise<RoomResponseDto[]> {
    const rooms = await this.roomRepository.getRooms();
    return rooms.map((room) => this.mapper.map(room, Room, RoomResponseDto));
  }

  @ApiParam({ name: 'id', description: 'ID of room', type: Number })
  async getRoomById(@Param('id') id: number): Promise<RoomResponseDto> {
    const room = await this.roomRepository.getRoomById(id);
    return this.mapper.map(room, Room, RoomResponseDto);
  }

  @ApiParam({ name: 'id', description: 'ID of room', type: Number })
  async updateRoom(
    @Param('id') id: number,
    createRoomDto: CreateRoomDto,
  ): Promise<String> {
    this.roomRepository.updateRoom(id, createRoomDto);
    return 'Room updated successfully';
  }

  @ApiParam({ name: 'id', description: 'ID of room', type: Number })
  async deleteRoom(@Param('id') id: number): Promise<String> {
    this.roomRepository.deleteRoom(id);
    return 'Room deleted successfully';
  }

  @ApiParam({ name: 'roomType', description: 'Type of room', type: String })
  async getRoomsByType(
    @Param('roomType') roomType: string,
  ): Promise<RoomResponseDto[]> {
    const rooms = await this.roomRepository.getRoomsByType(roomType);
    return rooms.map((room) => this.mapper.map(room, Room, RoomResponseDto));
  }

  @ApiParam({ name: 'id', description: 'ID of room', type: Number })
  async getRoomParticipants(@Param('id') id: number): Promise<RoomResponseDto> {
    const room = await this.roomRepository.getRoomParticipants(id);
    return this.mapper.map(room, Room, RoomResponseDto);
  }
}
