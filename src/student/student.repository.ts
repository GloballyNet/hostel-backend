import { Repository, DataSource } from 'typeorm';
import { CreateStudentDto } from './student.dto';
import { Student } from 'src/entites/student.entity';
import * as bcrypt from 'bcrypt';

export class StudentRepository extends Repository<Student> {
  constructor(private dataSource: DataSource) {
    super(Student, dataSource.createEntityManager());
  }

  async getStudentByEmail(email: string): Promise<Student> {
    return this.findOne({ where: { email: email } });
  }

  async createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    console.log('createStudentDto', createStudentDto);
    const { password } = createStudentDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('hashedPassword', hashedPassword);
    const student = this.create({
      firstName: createStudentDto.firstName,
      lastName: createStudentDto.lastName,
      password: hashedPassword,
      email: createStudentDto.email,
      phone: createStudentDto.phone,
      address: createStudentDto.address,
      age: createStudentDto.age,
      dateOfBirth: createStudentDto.dateOfBirth,
      created_at: new Date(),
      deleted_at: null,
      updated_at: new Date(),
      role: 'student',
    });
    return this.save(student);
  }
}
