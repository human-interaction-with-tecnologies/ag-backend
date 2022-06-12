import { Module } from '@nestjs/common';
import { ProfessionalController } from '@/adapters/api';
import { ProfessionalService } from '@/adapters/api';

@Module({
  controllers: [ProfessionalController],
  providers: [ProfessionalService],
})
export class ProfessionalModule {}
