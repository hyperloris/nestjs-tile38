import { DynamicModule, Global, Module, OnApplicationShutdown, Provider } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { Tile38 } from '@iwpnd/tile38-ts';

import { tile38ModuleOptions, tile38ModuleToken } from './constants';
import { Tile38ModuleAsyncOptions, Tile38ModuleOptions, Tile38OptionsFactory } from './interfaces';
import { createTile38Provider } from './providers';
import { getTile38Client } from './util';

@Global()
@Module({})
export class Tile38CoreModule implements OnApplicationShutdown {
  public constructor(private readonly moduleRef: ModuleRef) {}

  public static forRoot(options: Tile38ModuleOptions): DynamicModule {
    const tile38Provider = createTile38Provider(options);

    return {
      module: Tile38CoreModule,
      providers: [tile38Provider],
      exports: [tile38Provider],
    };
  }

  public static forRootAsync(options: Tile38ModuleAsyncOptions): DynamicModule {
    const tile38Provider: Provider = {
      inject: [tile38ModuleOptions],
      provide: tile38ModuleToken,
      useFactory: (tile38Options: Tile38ModuleOptions) => getTile38Client(tile38Options),
    };

    return {
      module: Tile38CoreModule,
      imports: options.imports,
      providers: [...this.createAsyncProviders(options), tile38Provider],
      exports: [tile38Provider],
    };
  }

  public async onApplicationShutdown(): Promise<void> {
    const tile38 = this.moduleRef.get<Tile38>(tile38ModuleToken);
    if (tile38) {
      await tile38.quit();
    }
  }

  private static createAsyncProviders(options: Tile38ModuleAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }

    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(options: Tile38ModuleAsyncOptions): Provider {
    if (options.useFactory) {
      return {
        inject: options.inject || [],
        provide: tile38ModuleOptions,
        useFactory: options.useFactory,
      };
    }

    return {
      inject: [options.useExisting || options.useClass],
      provide: tile38ModuleOptions,
      useFactory: (optionsFactory: Tile38OptionsFactory) => optionsFactory.createTile38Options(),
    };
  }
}
