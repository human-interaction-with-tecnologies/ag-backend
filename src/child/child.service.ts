import { PrismaService } from '@/prisma';
import { Injectable } from '@nestjs/common';
import { Children, Prisma } from '@prisma/client';

@Injectable()
export class ChildService {
  constructor(private prisma: PrismaService) {}

  async children(params: {
    skip?: number;
    take?: number;
    where?: Prisma.ChildrenWhereInput;
    orderBy?: Prisma.ChildrenOrderByWithAggregationInput;
  }): Promise<Children[]> {
    const { skip, take, where, orderBy } = params;
    return this.prisma.children.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }

  async createChild(data: Prisma.ChildrenCreateInput): Promise<Children> {
    return this.prisma.children.create({ data });
  }
}
