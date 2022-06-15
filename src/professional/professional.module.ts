import { Module } from '@nestjs/common';
import { ProfessionalController, ProfessionalService } from '@/professional';

@Module({
  controllers: [ProfessionalController],
  providers: [ProfessionalService],
})
export class ProfessionalModule {}
