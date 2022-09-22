import { Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from '@/prisma';
import { GameController, GameService } from '@/game';

@Module({
  imports: [PrismaModule],
  providers: [GameService, PrismaService],
  controllers: [GameController],
})
export class GameModule {}
