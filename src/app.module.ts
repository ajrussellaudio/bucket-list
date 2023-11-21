import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { CountryModule } from './country/country.module';

@Module({
  imports: [CountryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
