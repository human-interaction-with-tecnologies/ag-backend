import { PrismaService } from '@/prisma';
import { Injectable } from '@nestjs/common';
import {
  Professional,
  Prisma,
  Children,
  ChildrenProfessionals,
} from '@prisma/client';

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
    where?: Prisma.ProfessionalWhereInput;
    orderBy?: Prisma.ProfessionalOrderByWithRelationInput;
  }): Promise<Professional[]> {
    const { skip, take, where, orderBy } = params;
    return this.prisma.professional.findMany({
      skip,
      take,
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

  async listProfessionalChildren(params: {
    where: Prisma.ChildrenProfessionalsWhereInput;
    skip?: number;
    take?: number;
    orderBy?: Prisma.ChildrenOrderByWithRelationInput;
  }): Promise<Children[]> {
    const { where, skip, take, orderBy } = params;
    return this.prisma.children.findMany({
      where: {
        ChildrenProfessional: {
          some: where,
        },
      },
      skip,
      take,
      orderBy,
    });
  }

  async addChildrenToProfessional(params: {
    professionalId: string;
    childId: string;
  }): Promise<ChildrenProfessionals> {
    const { professionalId, childId } = params;
    return this.prisma.childrenProfessionals.create({
      data: {
        fk_child_id: childId,
        fk_professional_id: professionalId,
      },
    });
  }
}
