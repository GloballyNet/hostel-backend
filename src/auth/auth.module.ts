import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { StudentModule } from 'src/student/student.module';
import { JwtStudentStrategy } from './strategies/jwt-student.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'yourkey',
      signOptions: { expiresIn: '60m' },
    }),
    StudentModule,
  ],
  providers: [AuthService, JwtStudentStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
