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
    const litedChildren = await this.prisma.children.findMany({
      skip,
      take,
      where,
      orderBy,
    });
    return litedChildren;
  }

  async createChild(data: Prisma.ChildrenCreateInput): Promise<Children> {
    const hasChildCreated = await this.prisma.children.create({ data });
    return hasChildCreated;
  }
}
