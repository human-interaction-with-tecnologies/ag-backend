import { PrismaModule, PrismaService } from '@/prisma';
import { Module } from '@nestjs/common';
import { ProfessionalController, ProfessionalService } from '@/professional';

@Module({
  imports: [PrismaModule],
  controllers: [ProfessionalController],
  providers: [ProfessionalService, PrismaService],
})
export class ProfessionalModule {}
