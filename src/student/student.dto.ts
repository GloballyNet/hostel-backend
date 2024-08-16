import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  phone: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  address: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  dateOfBirth: Date;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  age: number;
}

export class AuthResponseDto {
  @ApiProperty()
  access_token: string;
}

export class LoginRequestDto { 
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}

export class StudentResponseDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  dateOfBirth: Date;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  deleted_at: Date;
  @ApiProperty()
  role: string;
  @ApiProperty()
  room: any;
  @ApiProperty()
  booking: any;
  @ApiProperty()
  complaints: any[];
}