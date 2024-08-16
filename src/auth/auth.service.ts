import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtStudentPayload } from 'src/interfaces/jwt-payload.interface';
import { AuthResponseDto, CreateStudentDto, LoginRequestDto } from 'src/student/student.dto';
import * as bcrypt from 'bcrypt';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly studentService: StudentService,
  ) {}

  async registerStudent(
    createStudentDto: CreateStudentDto,
  ): Promise<AuthResponseDto> {
    console.log('createStudentDto', createStudentDto);
    const { email } = createStudentDto;
    const student = await this.studentService.getStudentByEmail(email);
    if (student) {
      throw new BadRequestException('Student already exists with this email');
    }

    const payload = {
      email: createStudentDto.email,
      role: 'student',
    };

    await this.studentService.createStudent(createStudentDto); // Use await here

    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }

  async validateUser(loginRequest: LoginRequestDto): Promise<AuthResponseDto> { 
    const { email, password } = loginRequest;
    const student = await this.studentService.getStudent(email); 
    if (!student) {
      throw new UnauthorizedException('Student not found');
    }
    
    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload: JwtStudentPayload = {
      sub: student.id,
      email: student.email,
      role: 'student',
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
