import { Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from '@/prisma';
import { InstitutionController, InstitutionService } from '@/institution';

@Module({
  imports: [PrismaModule],
  providers: [InstitutionService, PrismaService],
  controllers: [InstitutionController],
})
export class InstitutionModule {}
