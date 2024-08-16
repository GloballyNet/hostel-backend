import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config'; 
import { JwtStudentPayload } from 'src/interfaces/jwt-payload.interface';

@Injectable()
export class JwtStudentStrategy extends PassportStrategy(Strategy, 'jwt-student') {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET') || 'yourkey', // Load secret from environment
    });
  }

  async validate(payload: JwtStudentPayload) {
    if (payload.role !== 'student') {
      throw new UnauthorizedException();
    }
    return { id: payload.sub, email: payload.email };
  }
}
