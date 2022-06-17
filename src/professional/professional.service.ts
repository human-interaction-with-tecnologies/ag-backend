import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Professional, Prisma } from '@prisma/client';

@Injectable()
export class ProfessionalService {
  constructor(private prisma: PrismaService) {}

  async createProfessional(
    data: Prisma.ProfessionalCreateInput,
  ): Promise<Professional> {
    return this.prisma.professional.create({ data });
  }

  async professional(
    professionalWhereUniqueInput: Prisma.ProfessionalWhereUniqueInput,
  ): Promise<Professional | null> {
    return this.prisma.professional.findUnique({
      where: professionalWhereUniqueInput,
    });
  }

  async professionals(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProfessionalWhereUniqueInput;
    where?: Prisma.ProfessionalWhereInput;
    orderBy?: Prisma.ProfessionalOrderByWithRelationInput;
  }): Promise<Professional[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.professional.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async updateProfessional(params: {
    where: Prisma.ProfessionalWhereUniqueInput;
    data: Prisma.ProfessionalUpdateInput;
  }): Promise<Professional> {
    const { where, data } = params;
    return this.prisma.professional.update({
      where,
      data,
    });
  }

  async deleteProfessional(
    where: Prisma.ProfessionalWhereUniqueInput,
  ): Promise<Professional> {
    return this.prisma.professional.delete({ where });
  }
}