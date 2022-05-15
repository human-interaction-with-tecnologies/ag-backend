import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { ChildModule } from './child/child.module';
import { ProfessionalModule } from './professional/professional.module';

@Module({
  imports: [
    ChildModule,
    ProfessionalModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
