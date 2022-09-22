import { PrismaService } from '@/prisma';
import { Injectable } from '@nestjs/common';
import { Game, MatchHistory, Prisma } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async games(params: {
    skip?: number;
    take?: number;
    where?: Prisma.GameWhereInput;
    orderBy?: Prisma.GameOrderByWithRelationInput;
  }): Promise<Game[]> {
    const { skip, take, where, orderBy } = params;
    return this.prisma.game.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }

  async createGame(data: Prisma.GameCreateInput): Promise<Game> {
    return this.prisma.game.create({ data });
  }

  async updateGame(params: {
    where: Prisma.GameWhereUniqueInput;
    data: Prisma.GameUpdateInput;
  }): Promise<Game> {
    const { where, data } = params;
    return this.prisma.game.update({
      data,
      where,
    });
  }

  async addMatch(params: {
    param: Prisma.GameWhereUniqueInput;
    data: Prisma.MatchHistoryMaxAggregateOutputType;
  }): Promise<MatchHistory> {
    const { param, data } = params;
    return this.prisma.matchHistory.create({
      data: {
        ...data,
        fk_game_id: param.id,
      },
    });
  }

  async listMatch(params: {
    param: Prisma.GameWhereUniqueInput;
    skip?: number;
    take?: number;
    where?: Prisma.MatchHistoryWhereInput;
    orderBy?: Prisma.MatchHistoryOrderByWithRelationInput;
  }): Promise<MatchHistory[]> {
    const { skip, take, where, orderBy } = params;
    return this.prisma.matchHistory.findMany({
      skip,
      take,
      where: {
        fk_game_id: params.param.id,
        ...where,
      },
      orderBy,
    });
  }
}
