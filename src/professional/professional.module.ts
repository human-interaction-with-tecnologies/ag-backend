import { Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from '@/prisma';
import { ProfessionalService } from './professional.service';
import { ProfessionalController } from './professional.controller';

@Module({
  imports: [PrismaModule],
  providers: [ProfessionalService, PrismaService],
  controllers: [ProfessionalController],
  exports: [ProfessionalService],
})
export class ProfessionalModule {}
