import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Professional } from '@/domain/model';
import { ProfessionalService } from '@/adapters/api/professional.service';

@Injectable()
export class AuthService {
  constructor(
    private profissionalService: ProfessionalService,
    private jwtTokenService: JwtService,
  ) {}

  async validateUserCredentials(professional: Professional): Promise<any> {
    const professionalData = await this.profissionalService.findOne(
      professional.email,
    );

    if (professional.password === professionalData?.password) {
      delete professionalData.password;
      return professionalData;
    }
    return null;
  }

  async loginWithCredentials(professional: Professional) {
    const payload = { username: professional.username, sub: professional.id };

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
