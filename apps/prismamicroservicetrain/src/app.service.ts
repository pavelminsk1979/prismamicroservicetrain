import { Injectable } from '@nestjs/common';
import { PrismaService } from './prismaservice';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getHello() {
    const res = await this.prisma.moto.create({
      data: {
        moto1: 'some title123',
        moto2: 'some title111111',
        moto3: 'some title2222222',
        ugauga: 'ugauga',
      },
    });
    console.log(res);
    return res;
  }
}
