<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<!--
<p align="center">
  A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>
-->

<p align="center">
  <a href="https://www.npmjs.com/package/nestjs-tile38" target="_blank"><img src="https://img.shields.io/npm/v/nestjs-tile38.svg?style=flat-square" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/nestjs-tile38" target="_blank"><img src="https://img.shields.io/npm/l/nestjs-tile38.svg?style=flat-square" alt="Package License" /></a>
  <a href="https://www.npmjs.com/package/nestjs-tile38" target="_blank"><img src="https://img.shields.io/npm/dm/nestjs-tile38.svg?style=flat-square" alt="NPM Downloads" /></a>
  <a href="https://github.com/hyperloris/nestjs-tile38/actions" target="_blank"><img src="https://shields.io/github/workflow/status/hyperloris/nestjs-tile38/Main.svg?style=flat-square" alt="CI Status" /></a>
  <a href="https://coveralls.io/github/hyperloris/nestjs-tile38?branch=main" target="_blank"><img src="https://coveralls.io/repos/github/hyperloris/nestjs-tile38/badge.svg?style=flat-square" alt="Coverage" /></a>
</p>

## Description

[Tile38](https://tile38.com) module for [Nest](https://github.com/nestjs/nest). This package is based on [Tile38-ts](https://github.com/tiermobility/tile38-ts), so visit its documentation for any questions about the API.

## Installation

```bash
$ npm i --save nestjs-tile38 @tiermobility/tile38-ts
```

## Quick Start

First, import the `Tile38Module` into your root module:

```ts
import { Module } from '@nestjs/common';
import { Tile38Module } from 'nestjs-tile38';

@Module({
  imports: [
    Tile38Module.forRoot({
      url: 'redis://localhost:9851',
    }),
  ],
})
export class AppModule {}

```

Second, inject the Tile38 client into any of your injectables by using the `InjectTile38` decorator:

```ts
import { Injectable } from '@nestjs/common';
import { InjectTile38 } from 'nestjs-tile38';
import { Tile38 } from '@tiermobility/tile38-ts';

@Injectable()
export class AppService {
  public constructor(@InjectTile38() private readonly tile38: Tile38) {}
}
```

## License

Licensed under [MIT](./LICENSE).

## Acknowledgements

- [nestjs](https://nestjs.com)
- [tile38-ts](https://github.com/tiermobility/tile38-ts)