/* eslint-disable no-console */
import { Queue } from 'bullmq';
import express from 'express';
import { BullMQAdapter } from '@bull-board/api/src/queueAdapters/bullMQ';
import { createBullBoard } from '@bull-board/api/src';
import { ExpressAdapter } from '@bull-board/express/src';

const queuesIds = ['binance', 'mexc'].map((eId) => `{${eId}}`);
const redisOptions = {
  port: 26379,
  host: 'api-qa.tradingdroid.net',
  password: 'admin21',
  db: 1,
};


const run = async () => {
  const app = express();

  const queues: BullMQAdapter[] = [];
  for (const queueId of queuesIds) {
    const exQueue = new Queue(queueId, { connection: redisOptions });
    const ioRedisClient = await exQueue.client;
    ioRedisClient.on("connect", () => {
      console.log("CONNECTED");
    });
    queues.push(new BullMQAdapter(exQueue));
  }

  const serverAdapter: any = new ExpressAdapter();
  serverAdapter.setBasePath('/ui');

  createBullBoard({
    queues,
    serverAdapter,
  });

  app.use('/ui', serverAdapter.getRouter());

  app.listen(3000, () => {
    console.log('Express app running on :3000');
  });
};

run().catch((e) => console.error(e));
