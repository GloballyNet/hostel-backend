import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/entites/student.entity';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from 'src/dto/signup.dto';
import { LoginDto } from 'src/dto/login.dto';


type StudentWithoutPassword = Omit<Student, 'password'>;

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Student)
        private studentsRepository: Repository<Student>,
        private jwtService: JwtService
    ) { }

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 12);
    }

    async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
        const { password, ...rest } = signUpDto;
        const hashedPassword = await this.hashPassword(password);

        const newStudent = this.studentsRepository.create({
            ...rest,
            password: hashedPassword,
        });

        await this.studentsRepository.save(newStudent);

        const payload = { id: newStudent.id };
        const token = this.jwtService.sign(payload);

        return { token };
    }

    async validateStudent(email: string, pass: string): Promise<StudentWithoutPassword | null> {
        const student = await this.studentsRepository.findOne({ where: { email } });
        if (student && (await bcrypt.compare(pass, student.password))) {
            const { password, ...result } = student;
            return result;
        }
        return null;
    }

    async login(loginDto: LoginDto): Promise<{ token: string }> {
        const { email, password } = loginDto;
        const student = await this.validateStudent(email, password);

        if (!student) {
            throw new Error('Invalid credentials');
        }

        const payload = { id: student.id };
        const token = this.jwtService.sign(payload);

        return { token };
    }
}
