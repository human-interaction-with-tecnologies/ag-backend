import { Controller, Post, Body } from '@nestjs/common';
import { ProfessionalService } from '@/professional';
import { Professional as ProfessionalModel } from '@prisma/client';

@Controller()
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Post('professional')
  async signupProfessional(
    @Body()
    professionalData: {
      name: string;
      email: string;
      password: string;
      position: string;
    },
  ): Promise<ProfessionalModel> {
    return this.professionalService.createProfessional(professionalData);
  }
}
