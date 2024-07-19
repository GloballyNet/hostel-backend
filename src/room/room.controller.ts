import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './room.dto';
import { Room } from 'src/entites/room.entity';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  async createRoom(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomService.createRoom(createRoomDto);
  }

  @Get()
  async getRooms(): Promise<Room[]> {
    return this.roomService.getRooms();
  }

  @Get(':id')
  async getRoomById(id: number): Promise<Room> {
    return this.roomService.getRoomById(id);
  }

  @Post(':id')
  async updateRoom(
    @Body() createRoomDto: CreateRoomDto,
    id: number,
  ): Promise<Room> {
    return this.roomService.updateRoom(id, createRoomDto);
  }
}
