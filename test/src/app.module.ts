import { Module } from '@nestjs/common';

import { Tile38Module } from './../../lib';
import { TrucksModule } from './trucks/trucks.module';

@Module({
  imports: [
    Tile38Module.forRoot({
      url: 'redis://localhost:9851',
    }),
    TrucksModule,
  ],
})
export class AppModule {}
