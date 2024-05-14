import { Body, Controller, Post } from '@nestjs/common';
import { JSONResponse } from '@iwpnd/tile38-ts';

import { AddTruckDto } from './dto';
import { TrucksService } from './trucks.service';

@Controller('trucks')
export class TrucksController {
  public constructor(private readonly trucksService: TrucksService) {}

  @Post()
  public async add(@Body() dto: AddTruckDto): Promise<Pick<JSONResponse, 'ok'>> {
    return this.trucksService.add(dto);
  }
}
