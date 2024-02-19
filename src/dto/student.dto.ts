import { IsDate, IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Length, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class StudentDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  lastName: string;

  @IsNotEmpty()
  @IsInt()
  @Min(16)
  @Max(120)
  age: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
@IsString()
  dateOfBirth: string;


  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  address: string;


  @IsOptional()
  @Type(() => Date)
  @IsDate()
  created_at?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  updated_at?: Date;


  @IsOptional()
  @IsInt()
  roomId?: number;
}
