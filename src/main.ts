import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma';
import { constants } from './common/utils/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prisma: PrismaService = app.get(PrismaService);
  prisma.enableShutdownHooks(app);
  await app.listen(constants.PORT || 8080);
}
bootstrap();
