import { Repository, DataSource } from 'typeorm';
import { CreateRoomDto, RoomUpdateDto } from './room.dto';
import { Room } from 'src/entites/room.entity';
import { RoomType } from 'src/enums/room.enum';

export class RoomRepository extends Repository<Room> {
  constructor(private dataSource: DataSource) {
    super(Room, dataSource.createEntityManager());
  }

  async createRoom(createRoomDto: CreateRoomDto): Promise<Room> {
    const room = this.create({
      roomNumber: createRoomDto.roomNumber,
      capacity: createRoomDto.capacity,
      roomType: createRoomDto.roomType,
      available: createRoomDto.available,
      description: createRoomDto.description,
      created_at: new Date(),
      updated_at: new Date(),
    });
    return this.save(room);
  }

  async getRooms(): Promise<Room[]> {
    return this.find();
  }

  async getRoomById(id: number): Promise<Room> {
    return this.findOneBy({ id });
  }

  async deleteRoom(id: number): Promise<void> {
    const room = await this.getRoomById(id);
    this.remove(room);
  }

  async getRoomsByType(roomType: string): Promise<Room[]> {
    const enumRoomType =
      RoomType[roomType.toUpperCase() as keyof typeof RoomType];
    return this.find({ where: { roomType: enumRoomType } });
  }

  async getRoomParticipants(id: number): Promise<Room> {
    return this.createQueryBuilder('room')
      .leftJoinAndSelect('room.students', 'students')
      .where('room.id = :id', { id })
      .getOne();
  }

  async updateRoom(id: number, payload: RoomUpdateDto): Promise<Room> {
    const room = await this.getRoomById(id);
    room.roomNumber = payload.roomNumber;
    room.capacity = payload.capacity;
    room.roomType = payload.roomType;
    room.available = payload.available;
    room.description = payload.description;
    room.students = payload.students;
    room.updated_at = new Date();
    return this.save(room);
  }
}
