import { Injectable } from '@nestjs/common';

@Injectable()
export class MicrocervprismaService {
  getHello(): string {
    return 'Hello World!';
  }
}
