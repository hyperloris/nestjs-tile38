import { Injectable } from '@nestjs/common';
import { JSONResponse, Tile38 } from '@iwpnd/tile38-ts';

import { InjectTile38 } from './../../../lib';
import { AddTruckDto } from './dto';

@Injectable()
export class TrucksService {
  public constructor(@InjectTile38() private readonly tile38: Tile38) {}

  public async add(dto: AddTruckDto): Promise<Pick<JSONResponse, 'ok'>> {
    const { id, lat, lon } = dto;
    const { ok } = await this.tile38.set('fleet', id).point(lat, lon).exec();
    return { ok };
  }
}
