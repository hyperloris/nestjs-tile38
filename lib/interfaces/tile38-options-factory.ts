import { Tile38ModuleOptions } from './tile38-module-options';

export interface Tile38OptionsFactory {
  createTile38Options(): Promise<Tile38ModuleOptions> | Tile38ModuleOptions;
}
