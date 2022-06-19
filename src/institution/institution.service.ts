import { PrismaService } from '@/prisma';
import { Injectable } from '@nestjs/common';
import { Institution, Prisma } from '@prisma/client';

@Injectable()
export class InstitutionService {
  constructor(private prisma: PrismaService) {}

  async institutions(params: {
    skip?: number;
    take?: number;
    where?: Prisma.InstitutionWhereInput;
    orderBy?: Prisma.ProfessionalOrderByWithRelationInput;
  }): Promise<Institution[]> {
    const { skip, take, where, orderBy } = params;
    return this.prisma.institution.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }

  async createInstitution(
    data: Prisma.InstitutionCreateInput,
  ): Promise<Institution> {
    return this.prisma.institution.create({ data });
  }
}
