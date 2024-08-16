import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  AuthResponseDto,
  CreateStudentDto,
  LoginRequestDto,
} from 'src/student/student.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<AuthResponseDto> {
    return this.authService.registerStudent(createStudentDto);
  }

  @Post('login')
  async login(
    @Body() loginRequestDto: LoginRequestDto,
  ): Promise<AuthResponseDto> {
    return this.authService.validateUser(loginRequestDto);
  }
}
