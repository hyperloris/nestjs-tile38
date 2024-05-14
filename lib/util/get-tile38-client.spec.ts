import { Tile38 } from '@iwpnd/tile38-ts';

import { getTile38Client } from './get-tile38-client';

describe('getTile38Client', () => {
  it('should return the Tile38 client', () => {
    const tile38 = getTile38Client({
      url: 'redis://localhost:9851',
    });

    expect(tile38).toBeDefined();
    expect(tile38).toBeInstanceOf(Tile38);
  });

  it('should return the Tile38 client with custom options', () => {
    const tile38 = getTile38Client({
      url: 'redis://localhost:9851',
      followerUrl: 'redis://localhost:9852',
    });

    expect(tile38).toBeDefined();
    expect(tile38).toBeInstanceOf(Tile38);
  });
});
