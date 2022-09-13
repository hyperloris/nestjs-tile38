import { DynamicModule, Module } from '@nestjs/common';

import { Tile38ModuleAsyncOptions, Tile38ModuleOptions } from './interfaces';
import { Tile38CoreModule } from './tile38-core.module';

@Module({})
export class Tile38Module {
  public static forRoot(options: Tile38ModuleOptions): DynamicModule {
    return {
      module: Tile38Module,
      imports: [Tile38CoreModule.forRoot(options)],
    };
  }

  public static forRootAsync(options: Tile38ModuleAsyncOptions): DynamicModule {
    return {
      module: Tile38Module,
      imports: [Tile38CoreModule.forRootAsync(options)],
    };
  }
}
