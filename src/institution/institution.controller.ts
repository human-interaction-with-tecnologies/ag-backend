import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { Institution, Prisma } from '@prisma/client';
import { JwtAuthGuard } from '@/auth';

@UseGuards(JwtAuthGuard)
@Controller('institutions')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  @Get()
  async institutions(
    @Query()
    params: {
      skip?: number;
      perPage?: number;
      search?: string;
      orderBy?: string;
      order?: string;
    },
  ): Promise<Institution[]> {
    const { skip, perPage, search, orderBy, order } = params;
    return this.institutionService.institutions({
      skip: +skip || 0,
      take: +perPage || 10,
      where: search ? { name: { contains: search } } : undefined,
      orderBy: orderBy ? { [orderBy]: order ?? 'asc' } : undefined,
    });
  }

  @Post()
  async createInstitution(
    @Body()
    data: Prisma.InstitutionCreateInput,
  ): Promise<Institution> {
    return this.institutionService.createInstitution(data);
  }
}
