import { Injectable } from '@nestjs/common';
import { Tile38ModuleOptions, Tile38OptionsFactory } from 'lib';

@Injectable()
export class ConfigService implements Tile38OptionsFactory {
  public createTile38Options(): Tile38ModuleOptions {
    return {
      url: 'redis://localhost:9851',
    };
  }
}
