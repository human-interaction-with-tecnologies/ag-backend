import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import {
  Professional as ProfessionalModel,
  Children as ChildrenModel,
  ChildrenProfessionals,
} from '@prisma/client';

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
  ): Promise<ProfessionalModel[]> {
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

  @Get(':id/children')
  async listProfessionalChildren(
    @Query()
    params: {
      skip?: number;
      perPage?: number;
      orderBy?: string;
      order?: string;
    },
    @Param('id') id: string,
  ): Promise<ChildrenModel[]> {
    const { skip, perPage, orderBy, order } = params;
    return this.professionalService.listProfessionalChildren({
      where: {
        fk_professional_id: id,
      },
      skip: +skip || 0,
      take: +perPage || 10,
      orderBy: orderBy ? { [orderBy]: order ?? 'asc' } : undefined,
    });
  }

  @Post(':id/children')
  async addChildrenToProfessional(
    @Param('id') id: string,
    @Body() data: { fk_child_id: string },
  ): Promise<ChildrenProfessionals> {
    const { fk_child_id } = data;
    return this.professionalService.addChildrenToProfessional({
      professionalId: id,
      childId: fk_child_id,
    });
  }
}
