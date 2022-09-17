import { Module } from '@nestjs/common';

import { Tile38Module } from './../../lib';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { TrucksModule } from './trucks/trucks.module';

@Module({
  imports: [
    Tile38Module.forRootAsync({
      imports: [ConfigModule],
      useExisting: ConfigService,
    }),
    TrucksModule,
  ],
})
export class AppAsyncModule {}
