import { Module } from '@nestjs/common';
import { Student } from '../entites/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
})
export class StudentModule {}
