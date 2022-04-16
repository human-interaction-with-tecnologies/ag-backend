import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChildModule } from './child/child.module';

@Module({
  imports: [ChildModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
