import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { Server } from 'http';
import * as request from 'supertest';

import { AppModule } from './../src/app.module';
import { AddTruckDto } from './../src/trucks/dto';

describe('Tile38', () => {
  let app: INestApplication;
  let server: Server;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    server = app.getHttpServer();

    await app.init();
  });

  it('should register a truck', async () => {
    const truckDto: AddTruckDto = {
      id: 'truck1',
      lat: 44.498955,
      lon: 11.327591,
    };

    const { status, body } = await request(server).post('/trucks').send(truckDto);

    expect(status).toEqual(201);
    expect(body).toEqual({ ok: true });
  });

  afterEach(async () => {
    await app.close();
  });
});
