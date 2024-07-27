import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto, RoomResponseDto } from './room.dto';
import { Room } from 'src/entites/room.entity';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  async createRoom(
    @Body() createRoomDto: CreateRoomDto,
  ): Promise<RoomResponseDto> {
    return this.roomService.createRoom(createRoomDto);
  }

  @Get()
  async getRooms(): Promise<RoomResponseDto[]> {
    return this.roomService.getRooms();
  }

  @Get(':id')
  async getRoomById(id: number): Promise<RoomResponseDto> {
    return this.roomService.getRoomById(id);
  }

  @Post(':id')
  async updateRoom(
    @Body() createRoomDto: CreateRoomDto,
    id: number,
  ): Promise<String> {
    return this.roomService.updateRoom(id, createRoomDto);
  }

  @Post(':id/delete')
  async deleteRoom(id: number): Promise<String> {
    return this.roomService.deleteRoom(id);
  }

  @Get(':roomType')
  async getRoomsByType(roomType: string): Promise<RoomResponseDto[]> {
    return this.roomService.getRoomsByType(roomType);
  }

  @Get(':id/participants')
  async getRoomParticipants(id: number): Promise<RoomResponseDto> {
    return this.roomService.getRoomParticipants(id);
  }
}
