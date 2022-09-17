import { Module } from '@nestjs/common';

import { TrucksController } from './trucks.controller';
import { TrucksService } from './trucks.service';

@Module({
  controllers: [TrucksController],
  providers: [TrucksService],
})
export class TrucksModule {}
