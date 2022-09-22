import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GameService } from './game.service';
import { Game, MatchHistory, Prisma } from '@prisma/client';
import { JwtAuthGuard } from '@/auth';

@UseGuards(JwtAuthGuard)
@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async games(
    @Query()
    params: {
      skip?: number;
      perPage?: number;
      search?: string;
      orderBy?: string;
      order?: string;
    },
  ): Promise<Game[]> {
    const { skip, perPage, search, orderBy, order } = params;
    return this.gameService.games({
      skip: +skip || 0,
      take: +perPage || 10,
      where: search ? { name: { contains: search } } : undefined,
      orderBy: orderBy ? { [orderBy]: order ?? 'asc' } : undefined,
    });
  }

  @Post()
  async createGame(
    @Body()
    data: Prisma.GameCreateInput,
  ): Promise<Game> {
    return this.gameService.createGame(data);
  }

  @Patch(':id')
  async updateGame(
    @Param('id') id: string,
    @Body()
    params: Prisma.GameUpdateInput,
  ): Promise<Game> {
    return this.gameService.updateGame({ where: { id }, data: params });
  }

  @Post(':id/match')
  async addMatch(
    @Param('id') id: string,
    @Body()
    body: Prisma.MatchHistoryMaxAggregateOutputType,
  ): Promise<MatchHistory> {
    return this.gameService.addMatch({
      param: { id },
      data: body,
    });
  }
  @Get(':id/match')
  async listMatch(
    @Param('id') id: string,
    @Query()
    params: {
      skip?: number;
      perPage?: number;
      search?: string;
      orderBy?: string;
      order?: string;
    },
  ): Promise<MatchHistory[]> {
    const { skip, perPage, search, orderBy, order } = params;
    return this.gameService.listMatch({
      param: { id },
      skip: +skip || 0,
      take: +perPage || 10,
      where: search ? { game_settings: { contains: search } } : undefined,
      orderBy: orderBy ? { [orderBy]: order ?? 'asc' } : undefined,
    });
  }
}
