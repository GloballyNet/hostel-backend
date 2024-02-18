import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentsService } from './student.service';
import { Student } from 'src/entites/student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Student> {
    return this.studentsService.findOne(id);
  }

  @Post()
  create(@Body() student: Student): Promise<Student> {
    return this.studentsService.create(student);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() studentData: Partial<Student>): Promise<Student> {
    return this.studentsService.update(id, studentData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.studentsService.remove(id);
  }
}
