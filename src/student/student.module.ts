import { Module } from '@nestjs/common';
import { Student } from '../entites/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { DataSource } from 'typeorm';
import { StudentRepository } from './student.repository';
import { StudentProfile } from './student.profile';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student, StudentRepository]),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  providers: [
    StudentService,
    StudentProfile,
    {
      provide: 'StudentRepository',
      useFactory: (dataSource: DataSource) => new StudentRepository(dataSource),
      inject: [DataSource],
    },
  ],
  controllers: [StudentController],
  exports: [StudentService, StudentProfile],
})
export class StudentModule {}
