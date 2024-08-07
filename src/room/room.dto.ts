import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsString, Max } from "class-validator";
import { Student } from "src/entites/student.entity";
import { RoomType } from "src/enums/room.enum";

export class CreateRoomDto {
    @IsInt() 
    @ApiProperty({ description: 'The number given the room' })
    readonly roomNumber: number;
    @IsString()
    @Max(256)
    @ApiProperty({ description: 'The description of the room' })
    readonly description: string;
    @Max(10)
    @IsInt()
    @ApiProperty({ description: 'The capacity of the room' })
    readonly capacity: number;
    @IsBoolean()
    @ApiProperty({ description: 'The availability of the room' })
    readonly available: boolean;
    @IsString()
    @ApiProperty({ description: 'The type of room' })
    readonly roomType: RoomType;
}

export class RoomUpdateDto {    
    @IsInt() 
    @ApiProperty({ description: 'The number given the room' })
    readonly roomNumber: number;
    @IsString()
    @Max(256)
    @ApiProperty({ description: 'The description of the room' })
    readonly description: string;
    @Max(10)
    @IsInt()
    @ApiProperty({ description: 'The capacity of the room' })
    readonly capacity: number;
    @IsBoolean()
    @ApiProperty({ description: 'The availability of the room' })
    readonly available: boolean;
    @IsString()
    @ApiProperty({ description: 'The type of room' })
    readonly roomType: RoomType;
    @ApiProperty({ description: 'The students in the room' })
    readonly students: Student[];
}

export class RoomResponseDto {
    @ApiProperty({ description: 'The id of the room' })
    @AutoMap()
    readonly id: number;
    @AutoMap()
    @ApiProperty({ description: 'The number given the room' })
    readonly roomNumber: number;
    @AutoMap()
    @ApiProperty({ description: 'The description of the room' })
    readonly description: string;
    @AutoMap()
    @ApiProperty({ description: 'The capacity of the room' })
    readonly capacity: number;
    @AutoMap()
    @ApiProperty({ description: 'The availability of the room' })
    readonly available: boolean;
    @AutoMap()
    @ApiProperty({ description: 'The type of room' })
    readonly roomType: RoomType;
}
  
  