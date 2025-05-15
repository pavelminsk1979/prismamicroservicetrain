import { Controller, Get } from '@nestjs/common';
import { MicrocervprismaService } from './microcervprisma.service';

@Controller()
export class MicrocervprismaController {
  constructor(private readonly microcervprismaService: MicrocervprismaService) {}

  @Get()
  getHello(): string {
    return this.microcervprismaService.getHello();
  }
}
