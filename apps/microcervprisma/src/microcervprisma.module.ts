import { Module } from '@nestjs/common';
import { MicrocervprismaController } from './microcervprisma.controller';
import { MicrocervprismaService } from './microcervprisma.service';

@Module({
  imports: [],
  controllers: [MicrocervprismaController],
  providers: [MicrocervprismaService],
})
export class MicrocervprismaModule {}
