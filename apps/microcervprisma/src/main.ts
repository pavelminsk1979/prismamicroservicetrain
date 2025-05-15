import { NestFactory } from '@nestjs/core';
import { MicrocervprismaModule } from './microcervprisma.module';

async function bootstrap() {
  const app = await NestFactory.create(MicrocervprismaModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
