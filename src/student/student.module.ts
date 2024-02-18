import { Module } from '@nestjs/common';
import { Student } from '../entites/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './student.service';
import { StudentsController } from './student.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers:[StudentsService],
  controllers:[StudentsController]
})
export class StudentModule {}
