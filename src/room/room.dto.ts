import { IsBoolean, IsInt, IsString, Max } from "class-validator";
import { RoomType } from "src/entites/room.entity";

export class CreateRoomDto {
    @IsInt() 
    readonly roomNumber: number;
    @IsString()
    @Max(256)
    readonly description: string;
    @Max(10)
    @IsInt()
    readonly capacity: number;
    @IsBoolean()
    readonly available: boolean;
    @IsString()
    readonly roomType: RoomType;
}
  
  