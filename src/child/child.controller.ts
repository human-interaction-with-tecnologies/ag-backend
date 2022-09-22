import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ChildService } from './child.service';
import { Children, Prisma } from '@prisma/client';
import { JwtAuthGuard } from '@/auth';

@UseGuards(JwtAuthGuard)
@Controller('children')
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @Get()
  async child(
    @Query()
    params: {
      skip?: number;
      perPage?: number;
      search?: string;
      orderBy?: string;
      order?: string;
    },
  ): Promise<Children[]> {
    const { skip, perPage, search, orderBy, order } = params;
    return this.childService.children({
      skip: +skip || 0,
      take: +perPage || 10,
      where: search
        ? {
            OR: [
              { name: { contains: search } },
              { username: { contains: search } },
              { diagnosis: { contains: search } },
            ],
          }
        : undefined,
      orderBy: orderBy ? { [orderBy]: order ?? 'asc' } : undefined,
    });
  }

  @Post()
  async createChild(
    @Body()
    data: Prisma.ChildrenCreateInput,
    @Res() res: any,
  ): Promise<Children> {
    try {
      const hasChildCreated = await this.childService.createChild(data);
      return hasChildCreated;
    } catch (err) {
      return res.status(400).send({
        message: err.message,
      });
    }
  }
}
