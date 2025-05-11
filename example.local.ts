/* eslint-disable no-console */
import { Queue } from 'bullmq';
import express from 'express';
import { BullMQAdapter } from '@bull-board/api/src/queueAdapters/bullMQ';
import { IServerAdapter } from '@bull-board/api/typings/app';
import { createBullBoard } from '@bull-board/api/src';
import { ExpressAdapter } from '@bull-board/express/src';

const queuesIds = ['capitalcom'].map((eId) => `{${eId}}`);
const redisOptions = {
  port: 6379,
  host: 'localhost',
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

  const expressAdapter = new ExpressAdapter();
  expressAdapter.setBasePath('/ui');
  expressAdapter.setUIConfig({
    boardTitle: 'Holis',
  });
  expressAdapter.setViewsPath(__dirname + '/views');

  createBullBoard({
    queues,
    serverAdapter: expressAdapter as unknown as IServerAdapter,
    options: {
      uiConfig: {
        boardTitle: 'Holis Dashboard',
        miscLinks: [
          {
            text: 'Instruments',
            url: './instruments',
          }
        ],
      },
    },
  });

  app.use('/ui', expressAdapter.getRouter());

  app.listen(3000, () => {
    console.log('Express app running on :3000');

    // setTimeout(() => {
    //   bullBoard.addExchange({
    //       id: 'capitalcom',
    //       name: 'Capital.com',
    //   } as unknown as any);
    // }, 1000);
    });
};

run().catch((e) => console.error(e));
