import { Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from '@/prisma';
import { ProfessionalController, ProfessionalService } from '@/professional';

@Module({
  imports: [PrismaModule],
  providers: [ProfessionalService, PrismaService],
  controllers: [ProfessionalController],
})
export class ProfessionalModule {}
