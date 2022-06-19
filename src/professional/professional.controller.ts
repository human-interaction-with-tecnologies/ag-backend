import { Controller, Post, Body, Get, Query, UseGuards } from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import {
  Professional,
  Professional as ProfessionalModel,
} from '@prisma/client';
import { JwtAuthGuard } from '@/auth';

@Controller('professionals')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Post()
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

  @UseGuards(JwtAuthGuard)
  @Get()
  async professionals(
    @Query()
    params: {
      skip?: number;
      perPage?: number;
      search?: string;
      orderBy?: string;
      order?: string;
    },
  ): Promise<Professional[]> {
    const { skip, perPage, search, orderBy, order } = params;
    return this.professionalService.professionals({
      skip: +skip || 0,
      take: +perPage || 10,
      where: search
        ? {
            OR: [
              {
                name: { contains: search },
              },
              {
                email: { contains: search },
              },
              {
                position: { contains: search },
              },
            ],
          }
        : undefined,
      orderBy: orderBy ? { [orderBy]: order ?? 'asc' } : undefined,
    });
  }
}
