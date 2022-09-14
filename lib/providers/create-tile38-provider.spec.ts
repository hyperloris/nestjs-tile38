import { Tile38 } from '@tiermobility/tile38-ts';

import { tile38ModuleToken } from './../constants';
import { createTile38Provider } from './create-tile38-provider';

describe('createTile38Provider', () => {
  it('should create a Tile38 Provider', () => {
    const provider = createTile38Provider({
      url: 'redis://localhost:9851',
    });

    expect(provider).toBeDefined();
    expect(provider['provide']).toBe(tile38ModuleToken);
    expect(provider['useValue']).toBeInstanceOf(Tile38);
  });
});
