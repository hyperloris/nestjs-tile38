import { Module } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { Tile38 } from '@iwpnd/tile38-ts';

import { tile38ModuleToken } from './constants';
import { Tile38ModuleOptions, Tile38OptionsFactory } from './interfaces';
import { Tile38Module } from './tile38.module';

class TestTile38ModuleOptionsFactory implements Tile38OptionsFactory {
  public createTile38Options(): Tile38ModuleOptions {
    return {
      url: 'redis://localhost:9851',
    };
  }
}

@Module({
  providers: [TestTile38ModuleOptionsFactory],
  exports: [TestTile38ModuleOptionsFactory],
})
class TestTile38ModuleOptions {}

describe('Tile38Module', () => {
  describe('forRoot', () => {
    it('should provide the Tile38 client', async () => {
      const module = await Test.createTestingModule({
        imports: [Tile38Module.forRoot({ url: 'redis://localhost:9851' })],
      }).compile();

      const tile38 = module.get<Tile38>(tile38ModuleToken);
      expect(tile38).toBeDefined();
      expect(tile38).toBeInstanceOf(Tile38);
    });
  });

  describe('forRootAsync', () => {
    it('should provide the Tile38 client when using the `useFactory` option', async () => {
      const module = await Test.createTestingModule({
        imports: [
          Tile38Module.forRootAsync({
            useFactory: () => ({ url: 'redis://localhost:9851' }),
          }),
        ],
      }).compile();

      const tile38 = module.get<Tile38>(tile38ModuleToken);
      expect(tile38).toBeDefined();
      expect(tile38).toBeInstanceOf(Tile38);
    });

    it('should provide the Tile38 client when using the `useExisting` option', async () => {
      const module = await Test.createTestingModule({
        imports: [
          Tile38Module.forRootAsync({
            imports: [TestTile38ModuleOptions],
            useExisting: TestTile38ModuleOptionsFactory,
          }),
        ],
      }).compile();

      const tile38 = module.get<Tile38>(tile38ModuleToken);
      expect(tile38).toBeDefined();
      expect(tile38).toBeInstanceOf(Tile38);
    });

    it('should provide the Tile38 client when using the `useClass` option', async () => {
      const module = await Test.createTestingModule({
        imports: [
          Tile38Module.forRootAsync({
            useClass: TestTile38ModuleOptionsFactory,
          }),
        ],
      }).compile();

      const tile38 = module.get<Tile38>(tile38ModuleToken);
      expect(tile38).toBeDefined();
      expect(tile38).toBeInstanceOf(Tile38);
    });
  });
});
