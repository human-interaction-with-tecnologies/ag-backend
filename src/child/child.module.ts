import { Module } from '@nestjs/common';
import { ChildController } from './adapters/api/child.controller';
import { ChildInMemory } from './adapters/db/child-in-memory.repository';
import { ChildService } from './domain/ports/child.service';
import { ChildRepository } from './domain/ports/child.repository';

@Module({
  controllers: [ChildController],

  providers: [
    ChildService,
    {
      provide: ChildRepository,
      useClass: ChildInMemory,
    }
  ],
})
export class ChildModule { }
