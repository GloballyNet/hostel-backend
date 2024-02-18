import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/entites/student.entity';

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

  async create(student: Student): Promise<Student> {
    return this.studentsRepository.save(student);
  }

  async update(id: number, studentData: Partial<Student>): Promise<Student> {
    await this.studentsRepository.update(id, studentData);
    return this.studentsRepository.findOne({where:{id}});
  }

  async remove(id: number): Promise<void> {
    await this.studentsRepository.softDelete(id);
  }
}
