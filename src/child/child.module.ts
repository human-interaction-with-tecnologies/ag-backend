import { Module } from '@nestjs/common';
import { ChildController } from './adapters/api/child.controller';
import { ChildInMemory } from './adapters/db/child-in-memory.repository';
import { ChildService } from './domain/ports/child.service';
import { ChildRepository } from './domain/ports/child.repository';
import { ChildApiService } from './adapters/api/child-api.service';

@Module({
  controllers: [ChildController],

  providers: [
    ChildService,
    ChildApiService,
    {
      provide: ChildRepository,
      useClass: ChildInMemory,
    }
  ],
})
export class ChildModule { }
