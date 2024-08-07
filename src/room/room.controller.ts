import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto, RoomResponseDto, RoomUpdateDto } from './room.dto';
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

  @Put(':id')
  async updateRoom(
    @Body() roomUpdateDto: Room,
    id: number,
  ): Promise<Room> {
    return this.roomService.updateRoom(id, roomUpdateDto);
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
