import { Module } from '@nestjs/common';
import { ProfessionalController, ProfessionalService } from '@/professional';
import { PrismaService } from '@/prisma';

@Module({
  imports: [],
  controllers: [ProfessionalController],
  providers: [ProfessionalService, PrismaService],
})
export class ProfessionalModule {}
