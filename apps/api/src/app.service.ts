import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService){}
  @Query(() => String)
  async getHello(): Promise<string> {
    const user = await this.prisma.user.findFirst();
    return 'Hello World!' + user.username;
  }
}
