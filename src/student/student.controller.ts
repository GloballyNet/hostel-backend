import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { Student } from 'src/entites/student.entity';
import { CreateStudentDto } from './student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @ApiCreatedResponse({ type: CreateStudentDto })
  @ApiBadRequestResponse({ type: ApiBadRequestResponse })
  async createStudent(
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentDto);
  }

}
