import { Tile38 } from '@iwpnd/tile38-ts';

import { Tile38ModuleOptions } from './../interfaces';

export function getTile38Client(options: Tile38ModuleOptions): Tile38 {
  const { url, followerUrl } = options;
  if (followerUrl) {
    return new Tile38(url, followerUrl);
  } else {
    return new Tile38(url);
  }
}
