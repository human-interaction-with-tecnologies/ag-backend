import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProfessionalModule } from '@/professional';

@Module({
  imports: [
    ProfessionalModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
