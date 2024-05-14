import { Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Tile38 } from '@iwpnd/tile38-ts';

import { Tile38Module } from './../tile38.module';
import { InjectTile38 } from './inject-tile38';

@Injectable()
class TestService {
  public constructor(@InjectTile38() public readonly tile38: Tile38) {}
}

describe('InjectTile38', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [Tile38Module.forRoot({ url: 'redis://localhost:9851' })],
      providers: [TestService],
    }).compile();
  });

  it('should inject the Tile38 client', () => {
    const testService = module.get(TestService);

    expect(testService.tile38).toBeDefined();
    expect(testService.tile38).toBeInstanceOf(Tile38);
  });
});
