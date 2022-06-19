import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProfessionalModule } from '@/professional';
import { AuthModule } from '@/auth';
import { InstitutionModule } from '@/institution';
import { PrismaModule } from '@/prisma';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProfessionalModule,
    InstitutionModule,
    PrismaModule,
    AuthModule,
  ],
})
export class AppModule {}
