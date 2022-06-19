import { ProfessionalService } from '@/professional';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private professionalService: ProfessionalService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const professional = await this.professionalService.professional({ email });
    if (bcrypt.compareSync(pass, professional.password)) {
      delete professional.password;
      return professional;
    }
    return null;
  }

  async login(user: JwtPayload): Promise<any> {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
