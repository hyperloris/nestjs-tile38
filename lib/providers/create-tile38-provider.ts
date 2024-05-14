import { Provider } from '@nestjs/common';
import { Tile38 } from '@iwpnd/tile38-ts';

import { tile38ModuleToken } from './../constants';
import { Tile38ModuleOptions } from './../interfaces';
import { getTile38Client } from './../util';

export function createTile38Provider(options: Tile38ModuleOptions): Provider<Tile38> {
  return {
    provide: tile38ModuleToken,
    useValue: getTile38Client(options),
  };
}
