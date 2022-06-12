import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProfessionalModule } from '@/modules';

@Module({
  imports: [
    ProfessionalModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
