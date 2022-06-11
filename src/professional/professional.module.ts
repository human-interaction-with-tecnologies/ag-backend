import { Module } from '@nestjs/common';
import { ProfessionalApiService } from './adapters/api/professional-api.service';
import { ProfessionalController } from './adapters/api/professional.controller';
import { ProfessionalInMemory } from './adapters/db/professional-in-memory.repository';
import { ProfessionalRepository } from './domain/ports/professional.repository';
import { ProfessionalService } from './domain/ports/professional.service';

@Module({
  controllers: [ProfessionalController],

  providers: [
    ProfessionalService,
    ProfessionalApiService,
    {
      provide: ProfessionalRepository,
      useClass: ProfessionalInMemory,
    },
  ],
})
export class ProfessionalModule {}
