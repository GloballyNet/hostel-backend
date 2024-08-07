import { Student } from 'src/entites/student.entity';
import { CreateStudentDto } from './student.dto';
import { StudentRepository } from './student.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  constructor(
    @Inject('StudentRepository') 
    private readonly studentRepository: StudentRepository,
  ) {}

  async createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentRepository.createStudent(createStudentDto);
  }
}
