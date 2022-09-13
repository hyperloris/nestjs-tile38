import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

import { Tile38ModuleOptions } from './tile38-module-options';
import { Tile38OptionsFactory } from './tile38-options-factory';

export interface Tile38ModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<Tile38OptionsFactory>;
  useExisting?: Type<Tile38OptionsFactory>;
  useFactory?: (...args: any[]) => Promise<Tile38ModuleOptions> | Tile38ModuleOptions;
}
