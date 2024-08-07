import { Repository, DataSource } from 'typeorm';
import { CreateStudentDto } from './student.dto';
import { Student } from 'src/entites/student.entity';

export class StudentRepository extends Repository<Student> {
  constructor(private dataSource: DataSource) {
    super(Student, dataSource.createEntityManager());
  }

  async createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.create({
      firstName: createStudentDto.firstName,
      lastName: createStudentDto.lastName,
      email: createStudentDto.email,
      phone: createStudentDto.phone,
      address: createStudentDto.address,
      age: createStudentDto.age,
      dateOfBirth: createStudentDto.dateOfBirth,
      created_at: new Date(),
      updated_at: new Date(),
    });
    return this.save(student);
  }
}
