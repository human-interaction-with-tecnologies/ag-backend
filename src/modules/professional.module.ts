import { Module } from '@nestjs/common';
import { ProfessionalController, ProfessionalService } from '@/adapters/api';

@Module({
  controllers: [ProfessionalController],
  providers: [ProfessionalService],
})
export class ProfessionalModule {}
