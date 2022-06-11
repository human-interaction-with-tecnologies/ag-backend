import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Professional } from 'src/professional/domain/model/professional.model';
import { ProfessionalService } from 'src/professional/domain/ports/professional.service';

@Injectable()
export class AuthService {
  constructor(
    private profissionalService: ProfessionalService,
    private jwtTokenService: JwtService,
  ) {}

  async validateUserCredentials(professional: Professional): Promise<any> {
    const professionalData = await this.profissionalService.findOne(
      professional,
    );

    if (professional.password === professionalData?.password) {
      const { password, ...result } = professionalData;
      return result;
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
