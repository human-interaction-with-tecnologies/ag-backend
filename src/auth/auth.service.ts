import { ProfessionalService } from '@/professional';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private professionalService: ProfessionalService,
    private jwtService: JwtService,
  ) {}

  private async validateUser(email: string, pass: string): Promise<any> {
    const professional = await this.professionalService.professional({ email });
    if (professional && bcrypt.compareSync(pass, professional.password)) {
      delete professional.password;
      return professional;
    }
    return null;
  }

  async login(user: JwtPayload): Promise<any> {
    const isValidUser = await this.validateUser(user.email, user.password);
    if (!isValidUser) {
      throw new HttpException(
        'Invalid email or password',
        HttpStatus.BAD_REQUEST,
      );
    }

    const payload = { email: isValidUser.email, sub: isValidUser.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
