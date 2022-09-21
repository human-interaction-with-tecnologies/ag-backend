import { Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from '@/prisma';
import { ChildController, ChildService } from '@/child';

@Module({
  imports: [PrismaModule],
  providers: [ChildService, PrismaService],
  controllers: [ChildController],
})
export class ChildModule {}
