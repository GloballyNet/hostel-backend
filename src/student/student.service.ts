import { Student } from 'src/entites/student.entity';
import {
  AuthResponseDto,
  CreateStudentDto,
  LoginRequestDto,
  StudentResponseDto,
} from './student.dto';
import { StudentRepository } from './student.repository';
import { Inject, Injectable } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { JwtService } from '@nestjs/jwt';
import { InjectMapper } from '@automapper/nestjs';

@Injectable()
export class StudentService {
  constructor(
    @Inject('StudentRepository')
    private readonly studentRepository: StudentRepository,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  async getStudentByEmail(email: string): Promise<StudentResponseDto> {
    const student = await this.studentRepository.getStudentByEmail(email);
    return this.mapper.map(student, Student, StudentResponseDto);
  }

  async getStudent(email: string): Promise<Student> {
    return this.studentRepository.getStudentByEmail(email);
  }
  async createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = await this.studentRepository.createStudent(
      createStudentDto,
    );
    return student;
  }
}
