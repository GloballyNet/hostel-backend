import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/entites/student.entity';
import { StudentDto } from 'src/dto/student.dto';


@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.studentsRepository.find({ relations: ['room', 'booking', 'complaints'] });
  }

  findOne(id: number): Promise<Student> {
    return this.studentsRepository.findOne({where:{id}});
  }

  async create(student: StudentDto): Promise<StudentDto> {
    return this.studentsRepository.save(student);
  }

  async update(id: number, studentData: Partial<Student>): Promise<Student> {
    const existingStudent = await this.studentsRepository.findOne({ where: { id } });
    
    if (!existingStudent) {
      throw new Error('Student not found');
    }
  
    const updatedStudentData = {
      ...studentData,
      updated_at: new Date(),
    };
  
    const updatedStudent = Object.assign(existingStudent, updatedStudentData);
    
    return await this.studentsRepository.save(updatedStudent);
  }

  async remove(id: number): Promise<void> {
    await this.studentsRepository.softDelete(id);
  }
}
