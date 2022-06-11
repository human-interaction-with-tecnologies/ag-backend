import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChildModule } from './child/child.module';
import { ProfessionalModule } from './professional/professional.module';

@Module({
  imports: [
    ChildModule,
    ProfessionalModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
