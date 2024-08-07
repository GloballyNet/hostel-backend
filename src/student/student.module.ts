import { Module } from '@nestjs/common';
import { Student } from '../entites/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { DataSource } from 'typeorm';
import { StudentRepository } from './student.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [
    StudentService,
    {
      provide: 'StudentRepository',
      useFactory: (dataSource: DataSource) => new StudentRepository(dataSource),
      inject: [DataSource],
    },
  ],
  controllers: [StudentController],
  exports: [],
})
export class StudentModule {}
